import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Register = () => {

    
    
    const handelRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget); 
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }

    //create user


    return (
        <div>
        <Navbar></Navbar>
        <div>
            <h2 className="text-3xl text-center">Please Register</h2>
            <form onSubmit={handelRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your Name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
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
            <button className="btn btn-primary">Register</button>
            </div>
            </form>
            <p className="text-center mt-4">Already have an Account? <Link className="text-[blue] font-bold" to="/Login">Log In</Link></p>
        </div><br />


            <Footer></Footer>
    </div>
    );
};

export default Register;