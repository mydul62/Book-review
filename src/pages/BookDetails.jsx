import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const [bookData, setBookData] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    let newData = data.find((dt) => dt.bookId == id);
    setBookData(newData);
  }, [data, id]);
  const {bookName, author, image, review, rating, category, tags, publisher } =
  bookData;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="">
          <div className="flex h-[711px] justify-center items-center bg-[#F3F3F3] rounded-xl mb-6">
            <img
              className="h-[564px] m-10 rounded-xl "
              src={image}
              alt="books"
            />
          </div>
        </div>
        <div>
          <div className=" border-b-2 pb-[22px]">
            <h2 className=" text-[40px] text-[#131313] font-bold font-Playfair">{bookName}</h2>
            <p className=" text-xl font-medium font-sans text-[#131313CC]">By : {author}</p>
          </div>
          <div className=" border-b-2  py-[22px] mb-[22px]">
            <h3 className=" text-xl font-medium font-sans text-[#131313CC]">{category}</h3>
          </div>
          <div className=" flex-1">
            <p className=" font-sans text-[16px] text-[#131313B3] "><span className=" font-bold text-[#131313]">Review:</span>
             {review}
            </p>
          </div>
          <div className=" flex items-center gap-7 border-b-2  mt-[50px] pb-5">
          <h2>tag</h2>
          {
            // tags.slice(0,1).map((tag)=>(
            //   <button key={index}  className="py-[7px] bg-[#23BE0A0D] text-[16px] font-me dium px-[16px] font-sans text-[#23BE0A]">
            //   #your adult
            // </button>
            // ))
          }
          <button  className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[16px] font-sans text-[#23BE0A]">
              #your adult
            </button>
          </div>
          <div className="grid grid-cols-2 justify-center  items-center space-y-4 pt-5">
            <h2>Number of Pages:</h2>
            <h2>281</h2>
            <h2>Publisher:</h2>
            <h2>J.B Lippincott & Co.</h2>
            <h2>Year of Publishing:</h2>
            <h2>1960</h2>
            <h2>Rating:</h2>
            <h2>4.8</h2>

          </div>
          <div className="flex gap-3 py-5">
          <button className=" text-black bg-transparent px-7 py-4 border border-[#1313134D]  rounded-xl">Read</button>
          <button className=" text-white bg-[#50B1C9] px-7 py-4 rounded-xl">Wishlist</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
