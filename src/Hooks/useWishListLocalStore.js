
import toast from "react-hot-toast";
import { getReadDataInfo } from "./useReadBooks";
export const getDataInfo =()=>{
  const WishListData = JSON.parse(localStorage.getItem('data')) || [];
  return WishListData;
}

export const saveDataInfo =(info)=>{
  const WishListData = getDataInfo();
  const bookData = getReadDataInfo();
  const isExistbookData  = bookData.find((data)=>data.bookId==info.bookId);
  const isExistWishListData= WishListData.find((data)=>data.bookId==info.bookId);
  if(isExistWishListData){
    toast.error("You have already added in wishlist")
  }else if(isExistbookData){
    toast.error("You have already read this book")
  }else{
    WishListData.push(info)
    localStorage.setItem('data',JSON.stringify(WishListData))
    toast.success('Congratulation, Added Done')
  }
}

export const deleteDataInfo =(info)=>{
  const WishListData = getDataInfo()
  if(WishListData){
    let wishData = WishListData.filter((data)=>data.bookId!=info.bookId);
    localStorage.setItem('data',JSON.stringify(wishData))
  }
  
}