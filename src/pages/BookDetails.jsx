import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const [bookData,setBookData]=useState([]);
  const {id}=useParams();
  const data = useLoaderData()

  useEffect(()=>{
     let newData=data.find((dt)=>dt.bookId==id)
     setBookData([...bookData,newData])
  },[id,data])
  return (
    <div>
      {
        console.log(bookData)
      }
    </div>
  );
};

export default BookDetails;