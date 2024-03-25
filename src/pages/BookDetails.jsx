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
  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
  } = bookData;
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
          <div className=" border-b-2 border-dashed pb-[22px]">
            <h2 className=" text-[40px] text-[#131313] font-bold font-Playfair">
              {bookName}
            </h2>
            <p className=" text-xl font-medium font-sans text-[#131313CC]">
              By : {author}
            </p>
          </div>
          <div className=" border-b-2 border-dashed py-[22px]">
            <h3 className=" text-xl font-medium font-sans text-[#131313CC]">
              {category}
            </h3>
          </div>
          <div className=" flex-1">
            <p className=" font-sans text-[16px] text-[#131313B3] ">
              <span className=" font-bold text-[#131313]">Review:</span>
              {review}
            </p>
          </div>
          <div className=" flex items-center gap-7 border-b-2 border-dashed mt-[50px] pb-5">
            <h2>tag</h2>
            <button className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[16px] font-sans text-[#23BE0A]">
              {tags[0]}
            </button>
            <button className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[16px] font-sans text-[#23BE0A]">
              {tags[1]}
            </button>
          </div>
          <div className="grid grid-cols-2 justify-center space-y-5 pt-5">
            <h2>Number of Pages:</h2>
            <h2>{totalPages}</h2>
            <h2>Publisher:</h2>
            <h2>{publisher}</h2>
            <h2>Year of Publishing:</h2>
            <h2>{yearOfPublishing}</h2>
            <h2>Rating:</h2>
            <h2>{rating}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
