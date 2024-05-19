

import AllHotel from "../../Components/Banner/Allhotel/AllHotel";
import Banner from "../../Components/Banner/Banner";
import Footer from "./Footer/Footer";
import HotesPrice from "./HotelPrice/HotesPrice";
import Navbar from "./Navbar/Navbar";
import Review from "./review/Review";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-8"> 
            <Banner></Banner>
            <HotesPrice></HotesPrice>
            <h1 className="text-center text-3xl font-bold mb-6 text-[#f6b93b]">Hotel</h1>
            <AllHotel></AllHotel>
            <Review></Review>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;