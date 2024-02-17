import { Link, NavLink } from "react-router-dom";
import { FiLogIn, FiLogOut, } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const [carts] = useCart()
    const {user, setUser} = useContext(AuthContext)
    const menu = (
        <>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isActive ? "text-[#ff5252] underline " : isPending ? "pending" : ""}>
                <li className="font-semibold px-3 py-2">Home</li>
            </NavLink>
        
            <NavLink to="/dashboard/home " className={({ isActive, isPending }) =>
                isActive ? "text-[#ff5252] underline" : isPending ? "pending" : ""}>
                <li className="font-semibold px-3 py-2">Dashboard</li>  
            </NavLink>
        </>
)
    const handleLogOut =()=>{
        setUser(null)
        toast.error('Logged Out')
    }
    
    return (
        <div className="container mx-auto py-2">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className=" flex justify-center items-center gap-2 ">
                        <h1 className="text-lg font-bold text-[#ff5252]">e<span className="text-black">-Shop</span></h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-3">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/cart " >
                        <button className="px-3 py-2 text-xl md:mr-5 flex relative text-rose-500 mr-1">
                            <FaShoppingCart/>
                            <p className="absolute -right-0 -top-1 font-bold text-xs">+{carts.length}</p>
                        </button>
                    </Link>

                    
                    {
                        user ? 
                        <button onClick={handleLogOut} className="btn btn-sm  btn-error font-semibold text-white"><FiLogOut className=" text-base "/>Logout</button>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-success font-semibold text-white"><FiLogIn className=" text-base "/>Login</button>
                        </Link>
                        
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;