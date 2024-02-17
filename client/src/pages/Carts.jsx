import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../Hooks/useAxios";


const Carts = () => {
    const [carts, refetch] = useCart()
    const myAxios = useAxios()

    const handleDelete =(id)=>{
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

            myAxios.delete(`/carts/${id}`)
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
        <div className="container mx-auto md:px-6 px-4 mb-10">
            <div className="flex justify-center  mt-20">
                <h2 className="self-center-center text-2xl md:text-4xl font-bold  border-b-4 inline-block mx-auto border-[#ff5252] mb-10 uppercase"> Cart</h2>
            </div>
            <div className="overflow-x-auto rounded-t-md mb-20">
            <table className="table ">
                {/* head */}
                <thead className="bg-orange-300 ">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Customer Phone</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    carts?.map(cart => 
                    <tr key={cart._id}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={cart.image } alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            
                        </div>
                        </td>
                        <td> {cart.name} </td>
                        <td>{cart.phone} </td>
                        <td>${cart.price} </td>
                        <td>
                            <button onClick={()=>handleDelete(cart._id)} className="bg-gray-200 text-red-500 px-3 py-1 rounded-sm flex items-center font-semibold shadow-xl"><span className="text-xl text-red-500"><MdDeleteForever/></span> Delete</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Carts;