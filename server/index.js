require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://azizul:12345@cluster0.13lfhki.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db("repliqDB").collection("products");
    const userCollection = client.db("repliqDB").collection("users");
    const cartCollection = client.db("repliqDB").collection("carts");
    const customerCollection = client.db("repliqDB").collection("customers");

    const verifyToken = (req, res, next) => {
        // console.log('inside verify Token', req.headers.authorization);
        if (!req.headers.authorization) {
          return res.status(401).send({ message: "Unauthorized " });
        }
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
          if (err) {
            return res.status(401).send({ message: "Unauthorized " });
          }
          req.decoded = decoded;
          next();
        });
    };
    app.post("/jwt", async (req, res) => {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "24h",
        });
        res.send({ token });
    });
    
    // customers
    app.get('/customers', async(req, res)=>{
        const result = await customerCollection.find().toArray()
        res.send(result)
    })
    app.post('/customers', async(req, res)=>{
        const customerInfo = req.body
        const result = await customerCollection.insertOne(customerInfo)
        res.send(result)
    })

    // products 
    app.get('/products', async(req, res)=>{
        const result = await productCollection.find().toArray()
        res.send(result)
    })
    app.delete('/products/:id', async(req, res)=>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const result = await productCollection.deleteOne(filter)
        res.send(result)
    })
    app.post('/products', async(req, res)=>{
        const productItem = req.body
        const result = await productCollection.insertOne(productItem)
        res.send(result)
    })

    // carts
    app.get('/carts', async(req, res)=>{
        const result = await cartCollection.find().toArray()
        res.send(result)
    })
    app.post('/carts', async(req, res)=>{
        const cartItem = req.body
        const result = await cartCollection.insertOne(cartItem)
        res.send(result)
    })
    app.delete('/carts/:id', async(req, res)=>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const result = await cartCollection.deleteOne(filter)
        res.send(result)
    })

    // users
    app.post('/users', async(req, res)=>{
        const user = req.body
        const result = await userCollection.insertOne(user)
        res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("e-shop App Running...!");
});
  
app.listen(port, () => {
    console.log(`e-shop App Running on port ${port}`);
});