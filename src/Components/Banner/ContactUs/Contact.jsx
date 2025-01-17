import Footer from "../../../pages/Home/Footer/Footer";
import Navbar from "../../../pages/Home/Navbar/Navbar";


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full bg-base-200 p-8 mb-8 mt-2 rounded">
                
            <div className="hero w-4/5 mx-auto min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#feca57] text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;