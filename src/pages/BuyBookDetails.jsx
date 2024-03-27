import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsCard from "../Components/BookDetailsCard";

const BuyBookDetails = () => {
  const [bookData, setBookData] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    let newData = data.find((dt) => dt.bookId == id);
    setBookData(newData);
  }, [data, id]);

  return (
    <BookDetailsCard showbuybutton={true}   bookData={bookData}></BookDetailsCard>
  );
};

export default BuyBookDetails;