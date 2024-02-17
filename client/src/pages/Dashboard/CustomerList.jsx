import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomerList = () => {
    const myAxios = useAxios()
    const [customers, setCustomers] = useState([])

    useEffect(()=>{
        myAxios.get(`/customers`)
        .then(res =>{
            setCustomers(res.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },[myAxios])
    
  return (
    <div>
        <div className="flex justify-center  mt-10">
            <h2 className="flex justify-center gap-2 text-2xl md:text-4xl font-bold  border-b-4 mx-auto border-[#ff5252] mb-10 uppercase"> Customer List</h2>
        </div>
        <div className="overflow-x-auto rounded-t-md">
            <table className="table">
                {/* head */}
                <thead className="bg-orange-300 ">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers?.map(customer => 
                    <tr key={customer._id}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={customer.image ? customer.image : "/user.png"} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            
                        </div>
                        </td>
                        <td> {customer.name} </td>
                        <td>{customer.customerPhone}</td>
                        <td>{customer.email}</td>
                        <td>
                            <Link to={`info/${customer._id}`} className="bg-orange-400 text-white px-3 py-1 rounded-full shadow-xl">Details</Link>
                            
                        </td>
                        
                    </tr>)
                }
                
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default CustomerList;
