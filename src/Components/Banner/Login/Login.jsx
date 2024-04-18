import { Link } from "react-router-dom";
import Footer from "../../../pages/Home/Footer/Footer";
import Navbar from "../../../pages/Home/Navbar/Navbar";


const Login = () => {
    
    const handelLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget); 
        const form = new FormData(e.currentTarget);
        console.log(form);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <form onSubmit={handelLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                </form>
                <p className="text-center mt-4">Dont have an Account <Link className="text-[blue] font-bold" to="/register">Register</Link></p>
            </div><br />


<Footer></Footer>
        </div>
    );
};

export default Login;