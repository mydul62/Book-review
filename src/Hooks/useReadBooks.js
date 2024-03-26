import toast from "react-hot-toast";

export const getReadDataInfo =()=>{
  const ReadBookDataData = JSON.parse(localStorage.getItem('dataBook')) || [];
  return ReadBookDataData;
}

export const saveReadDataInfo =(info)=>{
  const ReadBookDataData = getReadDataInfo()
  const isExist = ReadBookDataData.find((data)=>data.bookId==info.bookId);
  if(isExist){
    toast.error("you have already read this book")
  }else{
    ReadBookDataData.push(info)
    localStorage.setItem('dataBook',JSON.stringify(ReadBookDataData));
    toast.success('congratulation, read done')
  }
}