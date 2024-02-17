import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const ProductList = () => {
    const myAxios = useAxios()
    const {data: products =[], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await myAxios.get(`/products`)
            return res.data
        }
    })
    const handleDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete!"
          }).then((result) => {
            if (result.isConfirmed) {

            myAxios.delete(`/products/${id}`)
            .then(res =>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Employee data has been Deleted.",
                        icon: "success"
                    });
                    refetch()
                }
                
            })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-center  mt-10">
                <h2 className="flex justify-center gap-2 text-2xl md:text-4xl font-bold  border-b-4 mx-auto border-[#ff5252] mb-10 uppercase">Product List</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.map(product => 
                        <tr key={product._id}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={product.image ? product.image : "/user.png"} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                
                            </div>
                            </td>
                            <td> {product.name} </td>
                            <td>{product.description.slice(0,10)}</td>
                            <td>${product.price}</td>
                            <td>
                                <button onClick={()=>handleDelete(product._id)} className="bg-gray-200 text-red-500 px-3 py-1 rounded-sm flex items-center font-semibold shadow-xl"><span className="text-xl text-red-500"><MdDeleteForever/></span> Delete</button>
                            </td>
                            
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;