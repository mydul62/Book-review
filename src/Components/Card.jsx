import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {bookId, bookName, author, image, review, rating, category, tags, publisher } =
    data;
  return (
   <Link to={`/bookdetails/${bookId}`}>
    <div className="card p-6 border-2">
      <div className="h-[230px] flex justify-center items-center bg-[#F3F3F3] rounded-xl mb-6">
        <img className="  h-[180px] m-6 rounded-xl " src={image} alt="books" />
      </div>
      <div className="">
        <div className=" flex gap-3 flex-wrap mb-4">
          {
          tags.slice(0,2).map((tag,idx) =>(
            <button key={idx} className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[16px] font-sans text-[#23BE0A]">
              {tag}
            </button>
          ))
          }
        </div>
        <div className=" border-b-2 border-dashed pb-6 space-y-4">
          <h2 className=" text-2xl font-bold font-Playfair text-[#131313]">{bookName}</h2>
          <p className="font-sans font-medium text-[16px] text-[#131313CC]">By : {author}</p>
        </div>
        <div className=" flex justify-between pt-6 text-[#131313CC]">
          <div>
            <h3 className="font-sans font-medium text-[16px]">{category}</h3>
          </div>
          <div>
            <h3 className=" flex gap-2 items-center text-[16px] font-medium">
              {rating} <CiStar size={25} />
            </h3>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Card;
