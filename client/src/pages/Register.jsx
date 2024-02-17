import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";


const Register = () => {
    const [phone, setPhone] = useState("")
    const navigate = useNavigate(null)
    const myAxios = useAxios()
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name= form.name.value
        const number= phone
        const password= form.password.value
        const userInfo = {name, number, password}
        myAxios.post('/users', userInfo)
        .then(res =>{
            if(res.data.insertedId){
                toast.success('User created successfully');
            }
            const info = {phone: userInfo.number, password:userInfo.password,}
            myAxios.post('/jwt', info)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                    navigate("/")
                }
            })
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className="bg-gray-900 h-screen  relative overflow-hidden  flex flex-col justify-center items-center px-2">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
            <div className="h-[35rem] w-[35rem] bg-gradient-to-r from-red-400  to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse "></div>

            <div className="container mx-auto h-96 sm:w-96 bg-white bg-opacity-10 relative z-10 rounded-xl shadow-2xl border  border-r-0 border-b-0 border-opacity-30 backdrop-blur-sm ">
                <form onSubmit={handleRegister} className="h-full flex flex-col justify-evenly items-center ">
                    <h2 className="text-white text-2xl font-semibold tracking-wider">Register Form</h2>

                    <input type="text" name="name" placeholder="Full Name" className=" text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide "/>
                    
                    <div className="">
                        <PhoneInput country={'bd'} value={phone} onChange={setPhone}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                            
                          }}
                          inputStyle={{background: "transparent", width: "200px", border: "none", color: "white",}}
                        />
                    </div>
                    

                    <input type="password" name="password" placeholder="Password" className="text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide "/> 

                    <input type="submit" value="Submit"  className="cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 shadow-xl text-sm font-semibold"/>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to="/login" className="text-sm font-semibold text-[#fb8500] uppercase dark:text-gray-400 hover:underline">or Login</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div> 
        </div>
    );
};

export default Register;