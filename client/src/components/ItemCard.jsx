import { Link } from "react-router-dom";

const ItemCard = ({product}) => {

    return (
        <div>
            <div className="card  bg-base-100 shadow-2xl rounded-sm ">
                <figure><img className=" w-full" src={product.image} alt="Shoes" /></figure>
                <p className="absolute bg-slate-900 text-white right-0 mr-4 mt-4 px-3 font-semibold">${product.price}</p>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{product.name}</h2>
                    <div className="card-actions justify-center ">
                    <Link to={`/details/${product._id}`} className="btn btn-md btn-outline border-0 border-b-4 text-[#ff5252] font-bold hover:bg-[#ff5252] ">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;