import { useLoaderData } from "react-router-dom";
import AllBooks from "../Components/AllBooks";
import Banner from "../Components/Banner";

const Home = () => {
  const getData = useLoaderData();
  return (
    <div>
     <Banner></Banner>
     <AllBooks datas={getData}></AllBooks>
    </div>
  );
};

export default Home;