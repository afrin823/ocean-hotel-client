import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../pages/Home/Footer/Footer";
import Navbar from "../../../pages/Home/Navbar/Navbar";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import useAuth from "../../../firebase/hook/useAuth";
import { useForm } from "react-hook-form";




const Login = () => {
    
    const { signInUser } = useAuth();


    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
      const { email, password } = data;

      signInUser(email, password)
      .then(result => {
        if(result.user){
            navigate(form);
        }
    })
    };

    return (
        <div>
            <Navbar></Navbar>
<<<<<<< HEAD
            <div className="w-96 mx-auto my-14">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}          
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" 
          {...register("password", { required: true })}           
          />
          {errors.password && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning text-white text-xl">Login</button>
        </div>
        <p className="text-center">Dont have an Account 
           <Link className="text-[blue]" to={'/register'}> Register</Link></p>        
        <SocialLogIn></SocialLogIn>
      </form>
    
    </div>
            </div>
=======
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
                <p className="text-center mt-4">Dont have an Account <Link className="text-[blue] font-bold" >Register</Link></p>
            </div><br />

>>>>>>> 7bc03851dc84a1acb3e02b5b81cdba971adf6302

<Footer></Footer>
        </div>
    );
};

export default Login;