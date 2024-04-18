

import AllHotel from "../../Components/Banner/Allhotel/AllHotel";
import Banner from "../../Components/Banner/Banner";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-8"> 
            <Banner></Banner>
            <AllHotel></AllHotel>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;