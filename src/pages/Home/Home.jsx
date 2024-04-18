import Banner from "../../Components/Bnner/Banner";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;