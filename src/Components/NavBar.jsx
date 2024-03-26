import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar max-w-7xl mx-auto my-8 font-sans">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:font-sans"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/listedbooks"}>Listed Books</NavLink>
              <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 menu-horizontal px-1 *:text-[18px] *:p-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedbooks"}>Listed Books</NavLink>
            <NavLink to={"/pagestoread"}>Pages to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex gap-3">
          <button className=" text-white bg-[#23BE0A] px-7 py-4 rounded-xl">Sign in</button>
          <button className=" text-white bg-[#59C6D2] px-7 py-4 rounded-xl">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
