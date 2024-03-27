import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

const BuyCard = ({data}) => {
  
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
  yearOfPublishing,price}=data

  const handleDeleteItem=(info)=>{
    console.log(info);
  }
  return (
    <div className="md:grid relative flex flex-col  md:grid-cols-12   gap-6 border border-[#13131326] p-3 rounded-xl m-6">
      <div className="h-[px] col-span-3 flex justify-center items-center bg-[#1313130D] rounded-xl">
        <img className="  w-[80px] h-[100px] " src={image} />
      </div>
      <div className=" col-span-9 space-y-2">
        <h2 className=" text-2xl font-bold text-[#131313CC]  font-Playfair">
          {bookName}{" "}
        </h2>
        <p className=" text-[16px] text-[#131313CC]">By : {author}</p>
        <div className="space-y-4  border-b-2 pb-5 w-full">
          <div className=" flex flex-wrap justify-start  items-center gap-4">
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
        <div>
          <h3>price: {price}tk</h3>
        </div>
      </div>
      <div onClick={()=>handleDeleteItem(data)} className=" absolute top-0 right-0">
      <TiDeleteOutline  size={30}/>
      </div>
    </div>
  );
};

export default BuyCard;