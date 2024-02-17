import { FaHome, FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className=""> 
            <div className="flex flex-col md:flex-row container mx-auto gap-2">
                <div className=" h-auto md:min-h-screen md:w-56   bg-[#c0e0ed]">
                <Link to="/" className=" block text-2xl font-bold text-[#ff5252] text-center my-4 md:my-10">e<span className="text-black ">-Shop</span></Link>
                    <ul className="menu p-4 md:space-y-2">
                        <li>
                            <NavLink to="/dashboard/home"><FaHome /> Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/customer-list"><FaList />Customer List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/product-list"><FaList />Product List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/order-list"><FaList /> Order List</NavLink>
                        </li> 
                        <li>
                            <NavLink to="/dashboard/add-product"><FaPlus /> Add Product</NavLink>
                        </li> 
                        <li>
                            <NavLink to="/dashboard/add-customer"><FaPlus /> Add Customer</NavLink>
                        </li> 
                    </ul>
                    
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;