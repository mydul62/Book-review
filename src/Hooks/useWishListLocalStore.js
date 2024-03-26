
export const getDataInfo =()=>{
  const WishListData = JSON.parse(localStorage.getItem('data')) || [];
  return WishListData;
}

export const saveDataInfo =(info)=>{
  const WishListData = getDataInfo()
  const isExist = WishListData.find((data)=>data.bookId==info.bookId);
  if(isExist){
    alert("you have added in wishlist already")
  }else{
    WishListData.push(info)
    localStorage.setItem('data',JSON.stringify(WishListData))
  }
}