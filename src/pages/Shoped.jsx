import BuyCard from "../Components/BuyCard";
import { getBuyInfo } from "../Hooks/BuyBookStorage";

 
const Shoped = () => {
 const datas = getBuyInfo()
 const totalPrice = datas.reduce((total, book) => total + book.price, 0);
  return (
    <>
    <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6">
    <div className="col-span-4 border-2 border-dashed">
      {
        datas.map((data)=>(
          <BuyCard key={data.bookId} data={data}></BuyCard>
        ))
      }
    </div>
    <div className="col-span-full md:col-span-2 border">
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
    <div className=" flex justify-end mr-6">
      <h2>Total:{totalPrice}tk</h2>
    </div>
    </div>
    
    </div>
    </>
  );
};

export default Shoped;