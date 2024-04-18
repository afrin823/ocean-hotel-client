import Banner from "../../Components/Bnner/Banner";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl">Home page</h2>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;