
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { FaCartPlus } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../Hooks/useCart";

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const myAxios = useAxios()
    const {user} = useContext(AuthContext)
    const [, refetch] = useCart()
    console.log(user);
    useEffect(()=>{
        myAxios.get("/products")
        .then(res => {
            const findProduct = res.data.find(item => item._id === id)
            setProduct(findProduct)
        })
    },[myAxios, id])
    
    const handleAddToCart = productItem =>{
        const {image, name, price } = productItem
        const cartItem = {
            image, 
            name, 
            price,
            phone: user.phone
        }
        myAxios.post('/carts', cartItem)
        .then(res =>{
            if(res.data.insertedId){
                toast.success('Item Added!');
                refetch()
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="container mx-auto px-4 my-24">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2">
                    <img className=" w-full" src={product.image} alt="Shoes" />
                </div>
                
                <div className="md:w-1/2">
                    <h2 className="text-center md:text-start font-bold text-2xl mb-5">{product.name}</h2>
                    <p className="mb-5 text-center md:text-start font-bold text-2xl">${product.price}</p>
                    <p className="mb-10 text-center md:text-start">{product.description}</p>
                    
                    <div className="text-center md:text-start">
                    <button onClick={()=>handleAddToCart(product)}
                    className="btn btn-md  text-white font-bold hover:bg-[#ff5252] bg-[#ff5252]">Add To Cart <FaCartPlus/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;