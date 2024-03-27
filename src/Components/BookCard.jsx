import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { saveBuyInfo } from "../Hooks/BuyBookStorage";
import { MdLocalHospital } from "react-icons/md";

const BookCard = ({ data }) => {
  const { bookId, bookName, author, image, rating, category ,price} = data;

  const handleBuyButton = (data) => {
    saveBuyInfo(data);
  };

  return (
    <div className="card p-6 border-2">
      <div className="h-[230px] flex justify-center items-center bg-[#F3F3F3] rounded-xl mb-6">
        <img className="h-[180px] m-6 rounded-xl " src={image} alt="books" />
      </div>
      <div className="text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-Playfair text-[#131313]">
            {bookName}
          </h2>
          <p className="font-sans font-medium text-[16px] text-[#131313CC]">
            By : {author}
          </p>
        </div>
        <div className="flex justify-center gap-6 border-b-2 border-dashed pb-6 my-6 text-white">
          <button onClick={()=>handleBuyButton(data)} className="py-2 px-6 bg-[#23BE0A] rounded-lg">
            buy now
          </button>
          <Link to={`/buybookdelatis/${bookId}`}>
            <button className="py-2 px-6 bg-[#59C6D2] rounded-lg">
              details
            </button>
          </Link>
        </div>
        <div className="flex justify-between text-[#131313CC]">
          <div>
            <h3 className="font-sans font-medium text-[16px]">{category}</h3>
          </div>
          <div>
            <h2>Price: <span className="font-bold">{price}</span></h2>
          </div>
          <div>
            <h3 className="flex gap-2 items-center text-[16px] font-medium">
              {rating} <CiStar size={25} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
