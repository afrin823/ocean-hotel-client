 


import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div>
           <div>
                        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
            <div className="p-12 rounded-xl  bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 p-20">
                    <h1 className="text-5xl font-bold mb-6">The hotel has a modern <br /> feel and relaxing </h1>
                    <p>Hotel Description. Hotel Property Descriptions supplies additional information about a hotel property or chain, based on keyword requests, that can be used ...</p>
                
                    <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now <FaLongArrowAltRight /></button>
                
                </div>
                <div className="col-span-1">
                    <img className="rounded" src="https://i.ibb.co/WtLWy5h/istockphoto-104731717-612x612.jpg" alt="" />
                </div>
            </div>
        </div>
                
            </div> 
            <div id="item2" className="carousel-item w-full">
           
            <div className="p-12 rounded-xl  bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 p-20">
                    <h1 className="text-5xl font-bold mb-6">The hotel has a modern <br /> feel and relaxing </h1>
                    <p>Hotel Description. Hotel Property Descriptions supplies additional information about a hotel property or chain, based on keyword requests, that can be used ...</p>
                
                    <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now <FaLongArrowAltRight /></button>
                
                </div>
                <div className="col-span-1">
                    <img className="rounded" src="https://i.ibb.co/jJtmQpR/hotel-exterior.jpg" alt="" />
                </div>
            </div>
        </div>
                
            
            </div> 
            <div id="item3" className="carousel-item w-full">
            <div className="p-12 rounded-xl  bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 p-20">
                    <h1 className="text-5xl font-bold mb-6">The hotel has a modern <br /> feel and relaxing </h1>
                    <p>Hotel Description. Hotel Property Descriptions supplies additional information about a hotel property or chain, based on keyword requests, that can be used ...</p>
                
                    <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now <FaLongArrowAltRight /></button>
                
                </div>
                <div className="col-span-1">
                    <img className="rounded" src="https://i.ibb.co/br56wtG/istockphoto-119926339-612x612.jpg" alt="" />
                </div>
            </div>
        </div>
            </div> 
            <div id="item4" className="carousel-item w-full">
            <div className="p-12 rounded-xl  bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 p-20">
                    <h1 className="text-5xl font-bold mb-6">The hotel has a modern <br /> feel and relaxing </h1>
                    <p>Hotel Description. Hotel Property Descriptions supplies additional information about a hotel property or chain, based on keyword requests, that can be used ...</p>
                
                    <button className="btn w-48 bg-[#f6b93b] text-white mt-4 text-lg">Visit Now <FaLongArrowAltRight /></button>
                
                </div>
                <div className="col-span-1">
                    <img className="rounded" src="https://i.ibb.co/VDSxbC4/Park-Hotel-Group-Explore-Grand-Park-City-Hall-Facade.jpg" alt="" />
                </div>
            </div>
        </div>
            </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
            </div>
           </div>
        </div>
    );
};

export default Banner;