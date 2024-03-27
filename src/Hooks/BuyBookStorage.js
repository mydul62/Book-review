import toast from "react-hot-toast";

export const getBuyInfo =()=>{
  const BuyData = JSON.parse(localStorage.getItem('Buydata')) || [];
  return BuyData;
}

export const saveBuyInfo =(info)=>{
  
  const BuyDatas = getBuyInfo();
  const isExistBuyData= BuyDatas.find((data)=>data.bookId == info.bookId);
  
  if(isExistBuyData){
    toast.error("You have added")
  }else{
    BuyDatas.push(info)
    localStorage.setItem('Buydata',JSON.stringify(BuyDatas))
    toast.success('Congratulation, Added Done')
  }
}