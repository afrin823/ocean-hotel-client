

import AllHotel from "../../Components/Banner/Allhotel/AllHotel";
import Banner from "../../Components/Banner/Banner";
import Login from "../../Components/Banner/Login/Login";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <Banner></Banner>
            <AllHotel></AllHotel>
            </div>
            <div>
                <Login></Login>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;