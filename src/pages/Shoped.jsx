import { Link } from "react-router-dom";
import BuyCard from "../Components/BuyCard";
import { getBuyInfo } from "../Hooks/BuyBookStorage";

 
const Shoped = () => {
 const datas = getBuyInfo()
 const totalPrice = datas.reduce((total, book) => total + book.price, 0);
 if(datas.length ==0) return(
  <div className=" flex justify-center min-h-[calc(100vh-120px)] items-center ">
    <div className=" text-center space-y-6">
      <h2 className=" font-semibold font-Playfair mb-6 text-2xl">You do not Buy Book Ever</h2>
      <Link className="" to={"/buybook"}>
      <button className=" py-2 text-white rounded-xl px-5 bg-primary">Buy Now</button>
      </Link>
    </div>
  </div>
 )
  return (
    <>
    <div className=" max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-6">
    <div className=" col-span-full md:col-span-4 md:border-r-2 mr-6 border-dashed">
      {
        datas.map((data)=>(
          <BuyCard key={data.bookId} data={data}></BuyCard>
        ))
      }
    </div>
    <div className="col-span-full md:col-span-2 ">
    { 
      datas.map((data)=>(
        <div key={data.bookId} className=" ">
           <div className=" flex justify-between bg-slate-50 border-b-2 py-4 mx-2">
            <h2>{data.bookName}</h2>
            <h2>Price:{data.price}tk</h2>
           </div>
        </div>
      ))
    }
    <div className=" flex justify-end md:mr-6">
      <h2>Total:{totalPrice}tk</h2>
    </div>
    </div>
    
    </div>
    </>
  );
};

export default Shoped;