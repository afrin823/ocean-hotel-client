// import { NavLink } from "react-router-dom";

const Navbar = () => {

    
    const links = <>
            <li className="text-xl"><a>Home</a></li>
            <li className="text-xl"><a>Blog</a></li>
            <li className="text-xl"><a>Contact Us</a></li>
           {/* <li className="text-[#4cd137] text-xl "><NavLink to="/" className="text-[#4cd137] text-xl">Home</NavLink></li>
           <li><NavLink to="/">Blog</NavLink></li>
           <li className="text-[#000] text-xl gap-2"><NavLink to="/">Services</NavLink></li>
           <li className="text-[#fff] text-xl"><NavLink to="/">Contact Us</NavLink></li> */}
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
            </ul>
          </div>
          <a className="btn bg-[#f6b93b] text-2xl text-white">Ocean Heaven Hotel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#f6b93b] text-2xl text-white" >Log In</a>
        </div>
      </div>
    );
};

export default Navbar;