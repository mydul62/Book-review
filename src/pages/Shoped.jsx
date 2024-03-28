import { Link } from "react-router-dom";
import BuyCard from "../Components/BuyCard";
import { getBuyInfo } from "../Hooks/BuyBookStorage";
import { FiShoppingBag } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

 
const Shoped = () => {
  const [isShow,setIsShow]=useState(true)
 const datas = getBuyInfo()
 const totalPrice = datas.reduce((total, book) => total + book.price, 0);
 const handleIsShow  =()=>{
  setIsShow(!isShow)
 }
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
    <div className=" flex gap-2  w-[100%] md:w-[50%] mx-auto md:my-6  justify-center items-center py-8 bg-[#1313130D] rounded-xl">
          <h2 className=" text-[#131313] font-bold font-sans text-3xl">
            Your cart Item 
          </h2>
          <div className=" h-6 w-12 text-xl border-2 py-3 border-[#23BE0A] flex justify-center items-center rounded-full">
              <h2>{datas.length}</h2>
                </div>
        </div>
    <div className=" max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-6">
    <div className=" col-span-full md:col-span-4 md:border-r-2 mr-0 md:mr-6 border-dashed">
      {
        datas.map((data)=>(
          <BuyCard key={data.bookId} data={data}></BuyCard>
        ))
      }
    </div>
    <div className={`col-span-full md:col-span-2 absolute z-30 text-white md:text-black font-bold text-xl md:text-sm md:static top-[80px] ease-in duration-300 ${isShow?'right-[500px]':'right-0'}  bg-slate-400 opacity-95 md:bg-[#1313130D] md: rounded-xl p-6  w-full min-h-screen `}>
    <div className=" flex justify-center items-center py-4 bg-[#1313130D] rounded-xl">
          <h2 className=" text-[#131313] font-bold font-sans text-3xl">
           Cost list
          </h2>
        </div>
    { 
      datas.map((data)=>(
        <div key={data.bookId} className=" ">
           <div className=" flex justify-between  border-b-2 py-4 mx-2">
            <h2>{data.bookName}</h2>
            <h2>Price:{Math.floor(data.price)}tk</h2>
           </div>
        </div>
      ))
    }
    <div className=" flex justify-end md:mr-6">
      <h2>Total:{Math.floor(totalPrice)}tk</h2>
    </div>
    </div>
    <div onClick={handleIsShow} className=" flex justify-center items-center gap-2 md:hidden fixed top-3 mr-3 z-50  right-0 p-2 bg-white border-2 border-[#10ac84] text-[#0abde3] rounded-full">
      {
        isShow?<FiShoppingBag size={30}/> : <RxCross1 size={30}/>
      }
      <div className=" border-2 rounded-full h-6 w-6 flex justify-center items-center text-[12px] border-[#10ac84]">
       {datas.length}
      </div>
    </div>
    </div>
    </>
  );
};

export default Shoped;