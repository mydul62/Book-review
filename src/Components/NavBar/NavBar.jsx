import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Navbar.css'
import { getBuyInfo } from "../../Hooks/BuyBookStorage";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [shopCount, setShopCount] = useState(0);

  const shopCounts = getBuyInfo();
       
  useEffect(() => {
    setShopCount(shopCounts);
  }, []); 

  return (
    <div className="">
      <div className="navbar max-w-7xl mx-auto font-sans p-6">
        <div className="navbar-start">
          {/* Dropdown Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Menu Items */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:font-sans"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/listedbooks"}>Listed Books</NavLink>
              <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
              <NavLink to={"/buybook"}>Buy Books</NavLink>
              <NavLink to={"/shoped"}>shop</NavLink>
            </ul>
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        {/* Center Navbar (Visible on large screens) */}
        <div className="navbar-center hidden lg:flex">
          {/* Menu Items */}
          <ul className="menu gap-5 menu-horizontal px-1 *:text-[18px] *:p-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            <NavLink to={"/buybook"}>Buy Books</NavLink>
            {/* Shopping Cart Icon with Count */}
            <NavLink to={"/shoped"}>
              <div className="relative">
                <MdOutlineShoppingCart size={20} />
                <div className="absolute h-5 w-5 top-[-15px] text-[10px] right-[-15px] border-2 border-[#23BE0A] flex justify-center items-center rounded-full">
                  {shopCount.length}
                </div>
              </div>
            </NavLink>
          </ul>
        </div>
        {/* Right Navbar (Visible on medium and large screens) */}
        <div className="navbar-end hidden md:flex gap-3">
          <button className="text-white bg-[#23BE0A] px-7 py-4 rounded-xl">Sign in</button>
          <button className="text-white bg-[#59C6D2] px-7 py-4 rounded-xl">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
