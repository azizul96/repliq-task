import { FaIdCard } from "react-icons/fa"; 
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { AiFillMail, AiFillPhone } from "react-icons/ai";


const CustomerDetails = () => {
    const {id} = useParams()
    const myAxios = useAxios()
    const [customer, setCustomer] = useState([])

    useEffect(()=>{
        myAxios.get(`/customers`)
        .then(res =>{
            const findCustomer = res.data.find(customer => customer._id == id)
            setCustomer(findCustomer)
        })
        .catch(error =>{
            console.log(error);
        })
    },[myAxios, id])

    return (
        <div>
            <h1 className="text-2xl text-center font-bold p-4 bg-rose-600 text-white rounded-md  flex justify-center items-center gap-2 mb-24"><FaIdCard />Customer Details </h1>

            <div className="w-full md:w-2/3 mx-auto px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-24 h-24 border-2 border-rose-600 rounded-full " alt="Testimonial avatar" src={customer?.image ? customer?.image : "/user.png"}/>
                </div>

                <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-5 flex justify-start items-center gap-2"> <FaUser/>{customer.name}</h2>

                <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-4 flex justify-start items-center gap-2"> <AiFillMail/>{customer.email}</h2>

                <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-4 flex justify-start items-center gap-2"> <AiFillPhone/>+{customer.customerPhone}</h2>
            </div>
        </div>
    );
};

export default CustomerDetails;