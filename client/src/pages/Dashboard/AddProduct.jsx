import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";


const AddProduct = () => {
    const myAxios = useAxios()

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const description = form.description.value
        const price = form.price.value
        const image = form.image.value
        const productInfo = {name, description, price, image }
        myAxios.post('/products', productInfo)
        .then(res =>{
            if(res.data.insertedId){
                toast.success('Product Added!');
                form.reset();
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="bg-gray-900 md:h-screen py-5  relative overflow-hidden  flex flex-col justify-center items-center px-4">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
            <div className="h-[35rem] w-[35rem] bg-gradient-to-r from-red-400  to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse "></div>

            <div className="container mx-auto h-96  bg-white bg-opacity-10 relative z-10 rounded-xl shadow-2xl border  border-r-0 border-b-0 border-opacity-30 backdrop-blur-sm ">
                <form onSubmit={handleAddProduct} className="h-full flex flex-col justify-evenly items-center ">
                    <h2 className="text-white text-2xl font-semibold tracking-wider">Product Form</h2>
                    <input type="text" name="name" placeholder="Title" className=" w-1/2 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide " required/>

                    <input type="text" name="image" placeholder="Image Link" className=" w-1/2 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide " required/>

                    <textarea type="text" name="description" placeholder="Description" className="w-1/2 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide " required/>

                    <input type="number" name="price" placeholder="Price" className="w-1/2 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide " required/>
                    
                    <input type="submit" value="Submit"  className="cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 shadow-xl text-sm font-semibold"/>
                </form>
                
            </div>
            
        </div>
    );
};

export default AddProduct;