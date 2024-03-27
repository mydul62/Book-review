
import { useLoaderData } from "react-router-dom";
import BookCard from "../Components/BookCard";

const BuyBooks = () => {

  const bookDatas =useLoaderData()
  return (
    <div className=" max-w-7xl w-[95%] gap-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        bookDatas.map((data)=>(
          <BookCard data={data} key={data.bookId}></BookCard>
        ))
      }
    </div>
  );
};

export default BuyBooks;