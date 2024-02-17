import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url(/banner.jpg)'}}>
            <div className="flex items-center justify-center lg:justify-end px-4 md:px-20 w-full h-full ">
                <div className="text-center" >
                    <h1 className="text-3xl font-semibold  lg:text-4xl">Buy Modern Chair In Black Color </h1>
                    <p className="lg:text-2xl text-xl font-semibold mt-4">Starting At Only <span className="text-[#ff5252]">$99.00</span></p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm text-white capitalize transition-colors duration-300 transform bg-[#ff5252] rounded-md lg:w-auto hover:bg-[#ff5252] focus:outline-none font-semibold "><Link to="/cart"> Shop Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;