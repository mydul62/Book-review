import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {
  const [show,setShow]=useState(true)


 const handleOnchange =()=>{
    setShow(!show)
 }
  return (
      <div className=" md:navbar max-w-7xl mx-auto font-sans z-40 h-20 md:h-40  flex items-center  top-0 bg-[#10ac84] md:bg-transparent md:relative fixed w-full">
        <div className=" md:navbar-start ml-4 items-center flex justify-between fixed md:static  ">
          <div className="  items-center flex md:hidden ">
            <div onClick={handleOnchange}>
              {
                show?<GiHamburgerMenu size={30} /> :<RxCross2  size={40}/>
              }
            </div>
            <div className={`absolute top-16 ${show?'left-[-500px] ' :'-left-6'} ease-in duration-300 z-40  w-[300px] text-center min-h-screen items-center flex justify-center rounded-r-xl bg-[#c8d6e5] opacity-95 font-bold`}>
            <ul className=" menu  flex flex-col  px-10 space-y-12 py-10 *:font-sans text-[20px] ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            <NavLink to={"/buybook"}>Buy Books</NavLink>
            <NavLink to={"/shoped"}>Your Cart </NavLink>
            <div className="  flex justify-between md:hidden gap-3">
          <button className="text-white bg-[#23BE0A] px-4 py-2 rounded-xl">
            Sign in
          </button>
          <button className="text-white bg-[#59C6D2] px-4 py-2 rounded-xl">
            Sign up
          </button>
        </div>
          </ul>
            </div>
          </div>
          <div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 menu-horizontal px-1 *:text-[18px] *:p-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            <NavLink to={"/buybook"}>Buy Books</NavLink>
            <NavLink to={"/shoped"}>
              <div className="relative">
                <MdOutlineShoppingCart size={20} />
              </div>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex gap-3">
          <button className="text-white bg-[#23BE0A] px-7 py-4 rounded-xl">
            Sign in
          </button>
          <button className="text-white bg-[#59C6D2] px-7 py-4 rounded-xl">
            Sign up
          </button>
        </div>
      </div>
  );
};

export default NavBar;
