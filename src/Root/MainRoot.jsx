import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer";

const MainRoot = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="  mt-[100px] md:mt-0">
      <Outlet></Outlet>
      </div>
      <div className=" mt-[80px]">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default MainRoot;