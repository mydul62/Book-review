import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainRoot = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoot;