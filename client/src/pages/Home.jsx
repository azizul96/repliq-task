import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ItemCard from "../components/ItemCard";
import useAxios from "../Hooks/useAxios";



const Home = () => {
    const [products, setProducts] = useState([])
    const myAxios = useAxios()
    useEffect(()=>{
        myAxios.get("/products")
        .then(res => {
            setProducts(res.data)
        })
    },[myAxios])
    return (
        <div>
            <Banner/>
            
            <section className="my-24 flex flex-col justify-center " id="products">
                <h2 className="self-center-center text-2xl md:text-4xl font-bold  border-b-4 inline-block mx-auto border-[#ff5252] mb-20 uppercase"> Products</h2>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {
                        products.map(product => <ItemCard key={product._id} product={product}></ItemCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;