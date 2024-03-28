import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const ReadBooks = ({ data }) => {
  const {
    bookName,
    author,
    tags,
    publisher,
    rating,
    category,
    bookId,
    image,
    totalPages,
    yearOfPublishing
    
  } = data;
  return (
    <div className="md:grid flex flex-col  md:grid-cols-12   gap-6 border border-[#13131326] p-6 rounded-xl">
      <div className="h-[231px] col-span-3 flex justify-center items-center bg-[#1313130D] rounded-xl">
        <img className="  w-[130px] h-[172px] " src={image} />
      </div>
      <div className=" col-span-9 space-y-4">
        <h2 className=" text-2xl font-bold text-[#131313CC]  font-Playfair">
          {bookName}{" "}
        </h2>
        <p className=" text-[16px] text-[#131313CC]">By : {author}</p>
        <div className="space-y-4  border-b-2 pb-5 w-full">
          <div className=" flex flex-wrap justify-start  items-center gap-4">
            <div className=" flex flex-col md:flex-row items-center gap-6">
              <h2 className="hidden md:flex ">Tag</h2>
              <div className=" flex items-center gap-3 ">
          {
          tags.slice(0,2).map((tag,idx) =>(
            <button key={idx} className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[16px] font-sans text-[#23BE0A] rounded-xl">
              #{tag}
            </button>
          ))
          }
          </div>
            </div>

            <div>
              <h2 className=" flex gap-2 text-[#131313CC] font-sans text-[16px]">
                {" "}
                <CiLocationOn size={20} />
                Year of Publishing: {yearOfPublishing}
              </h2>
            </div>
          </div>
          <div className=" flex gap-6">
            <h2 className=" flex items-center gap-2">
              <HiOutlineUsers size={20} />
              Publisher: {publisher}
            </h2>
            <h2 className=" flex items-center gap-2">
              <MdOutlineContactPage size={20} />
              Page {totalPages}
            </h2>
          </div>
        </div>
        <div className=" flex  flex-wrap items-center gap-3">
          <button className=" px-[20px] py-[11px] bg-[#328EFF26] text-[#328EFF] font-sans font-medium rounded-3xl ">
            Category: {category}
          </button>
          <button className=" px-[20px] py-[11px] bg-[#FFAC3326] text-[#FFAC33] font-sans font-medium rounded-3xl ">
            Rating: {rating}
          </button>
          <Link to={`/bookdetails/${bookId}`}>
            <button className=" px-[20px] py-[11px] bg-[#23BE0A] text-[#FFFFFF] font-sans font-medium rounded-3xl ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
