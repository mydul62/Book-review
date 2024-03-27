import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {  saveDataInfo } from "../Hooks/useWishListLocalStore";
import { saveReadDataInfo } from "../Hooks/useReadBooks";
import BookDetailsCard from "../Components/BookDetailsCard";

const BookDetails = () => {
  const [bookData, setBookData] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    let newData = data.find((dt) => dt.bookId == id);
    setBookData(newData);
  }, [data, id]);

  const handleAddWishList = (data)=>{
    saveDataInfo(data)
  }
  const handleAddReadBook = (data)=>{
    saveReadDataInfo(data);

  }

  return (
    <BookDetailsCard showreadbutton={true} handleAddWishList={handleAddWishList} handleAddReadBook={handleAddReadBook}  bookData={bookData}></BookDetailsCard>
  );
};

export default BookDetails;
