import { jwtDecode } from "jwt-decode";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
    const {user, setUser} = useContext(AuthContext)
    const [phone, setPhone] = useState("")
    const navigate = useNavigate(null)
    console.log(user);
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const number= phone
        const password= form.password.value
        const userInfo = {number, password}

        const LsToken = localStorage.getItem('access-token')
        const decoded = jwtDecode(LsToken)
        
        if(userInfo.number == decoded.phone && userInfo.password == decoded.password){
            setUser(decoded)
            toast.success("Login Successfully")
            navigate("/")
        }
    }
    return (
        <div className="bg-gray-900 h-screen  relative overflow-hidden  flex flex-col justify-center items-center px-2">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
            <div className="h-[35rem] w-[35rem] bg-gradient-to-r from-red-400  to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse "></div>

            <div className="container mx-auto h-96 sm:w-96 bg-white bg-opacity-10 relative z-10 rounded-xl shadow-2xl border  border-r-0 border-b-0 border-opacity-30 backdrop-blur-sm ">
                <form onSubmit={handleLogin} className="h-full flex flex-col justify-evenly items-center ">
                    <h2 className="text-white text-2xl font-semibold tracking-wider">Login Form</h2>
                    {/* <input type="email" name="email" placeholder="Email" className=" text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide "/> */}
                    <div className="">
                        <PhoneInput country={'bd'} value={phone} onChange={setPhone}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                          }}
                          inputStyle={{background: "transparent", width: "200px", border: "none", color: "white"}}
                        />
                    </div>
                    

                    <input type="password" name="password" placeholder="Password" className="text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide "/> 

                    <input type="submit" value="Submit"  className="cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 shadow-xl text-sm font-semibold"/>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to="/register" className="text-sm font-semibold text-[#fb8500] uppercase dark:text-gray-400 hover:underline">or Registration</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
            
        </div>
    );
};

export default Login;