import { NavLink } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
export default function Navbar() {
  return (
    
    <div>
      <div className="navbar bg-base-200 text-base-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl"> <FaShop /> E-commerce</NavLink>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-28 md:w-auto" />
        </div>
        <div className="mr-4 navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-4 link link-hover"><NavLink to="/" className="text-base-content">CATEGORY</NavLink></li>
            <li className="mr-4 link link-hover"><NavLink to="/" className="text-base-content">REGISTER</NavLink></li>
            <li className="mr-4 link link-hover"><NavLink to="/" className="text-base-content">LOGIN</NavLink></li>
          </ul>
        </div>
        <div className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
