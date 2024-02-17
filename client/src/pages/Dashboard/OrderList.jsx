import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const OrderList = () => {
    const [carts, ] = useCart()
    return (
        <div>
            <div className="flex justify-center  mt-10">
                <h2 className="flex justify-center gap-2 text-2xl md:text-4xl font-bold  border-b-4 mx-auto border-[#ff5252] mb-10 uppercase"> Order List</h2>
            </div>
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
                            <Link to={`order/${cart._id}`} className="bg-orange-400 text-white px-3 py-1 rounded-full shadow-xl">Details</Link>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;