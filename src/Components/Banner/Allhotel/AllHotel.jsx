import { useEffect, useState } from "react";
import { RiHotelLine } from "react-icons/ri";


const AllHotel = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('hotel.json') 
            .then(res => res.json())
            .then(data => setHotels(data))
    }, []);

    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 lg:gap-3">
            {hotels.map(hotel => (
                <div key={hotel.id} className="card w-96 mx-auto shadow-xl">
                        <figure>
                            <img className="w-full h-64" src={hotel.images} alt="" />
                        </figure>
                        <div className="">
                            <div className="card-body">
                            <h3 className="text-[#f6b93b] text-xl font-bold">{hotel.segment_name}</h3>
                                <div className="card-actions gap-4">
                                
                                    <div className="text-xl font-medium ">
                                        {hotel.estate_title}
                                    </div>
                                    {/* Add other badges or content here */}
                                </div>
                           
                             <div className="flex justify-between ">
                             <p>Status: {hotel.status}</p>
                             <p className="text-[#f6b93b] text-xl">{hotel.price}</p>
                             </div>
                             
                                <hr className="border-dashed border-w-[4px]" />
                                <p className="text-[gray]">{hotel.description}</p>
                                <div className="card-actions justify-between">
                                    <div className="flex justify-center	items-center	gap-2"><RiHotelLine className="text-2xl text-[#f6b93b]" />  <span className="text-[#f6b93b] text-xl font-bold">{hotel.id}</span></div>
                                    {/* Add other content or actions here */}
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default AllHotel;
