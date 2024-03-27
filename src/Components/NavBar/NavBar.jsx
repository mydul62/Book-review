import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import { getBuyInfo } from "../../Hooks/BuyBookStorage";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [shopCount, setShopCount] = useState([]);
  const [show,setShow]=useState(true)

  let shopCounts = getBuyInfo();
  useEffect(() => {
    setShopCount(shopCounts);
  }, []);
 const handleOnchange =()=>{
    setShow(!show)
 }
  return (
      <div className="relative md:navbar max-w-7xl mx-auto font-sans p-6">
        <div className=" md:navbar-start items-center flex justify-between ">
          <div className="  items-center flex md:hidden">
            <div onClick={handleOnchange}>
              {
                show?<GiHamburgerMenu size={30} /> :<RxCross2  size={40}/>
              }
            </div>
            <div className={`absolute top-24 ${show?'left-[-1000px] ' :'left-0'} duration-200 z-50 transition  w-[300px] text-center min-h-[400px] rounded-r-xl bg-slate-300`}>
            <ul className="  flex flex-col  px-10 space-y-8 py-10 *:font-sans text-[20px] ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            <NavLink to={"/buybook"}>Buy Books</NavLink>
            <NavLink to={"/shoped"}>Your Card </NavLink>
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
                <div className="absolute h-5 w-5 top-[-15px] text-[10px] right-[-15px] border-2 border-[#23BE0A] flex justify-center items-center rounded-full">
                  {shopCount.length}
                </div>
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
