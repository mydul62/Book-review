import { saveBuyInfo } from "../Hooks/BuyBookStorage";


const BookDetailsCard = ({bookData,handleAddReadBook,handleAddWishList,showreadbutton,showbuybutton}) => {
  const {bookName, author, image, review, rating, category, tags, publisher,totalPages,yearOfPublishing } =
  bookData;
   const handlebuyBook = (data)=>{
    saveBuyInfo(data);
   }
  return (
    <div>
      <div className="max-w-7xl w-[95%] mx-auto ">
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
        <div className=" px-4 md:px-0">
          <div className=" border-b-2 pb-[22px] ">
            <h2 className=" text-[40px] text-[#131313] font-bold font-Playfair">{bookName && bookName}</h2>
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
          <div className=" flex items-center gap-4 md:gap-7 border-b-2  mt-[50px] pb-5">
          <h2>tag</h2>
         <div className=" flex gap-1 flex-wrap">
         {
          tags && tags.map((tag,idx) =>(
            <button key={idx} className="py-[7px] bg-[#23BE0A0D] text-[16px] font-medium px-[10px] font-sans text-[#23BE0A]">
              {tag}
            </button>
          ))
          }
         </div>
          </div>
          <div className="grid grid-cols-2 justify-center  items-center space-y-4 pt-5">
            <h2 className="text-[#131313B3] text-[16px]">Number of Pages:</h2>
            <h2 className="text-[#131313] text-[16px] font-semibold">{totalPages}</h2>
            <h2 className="text-[#131313B3] text-[16px]">Publisher:</h2>
            <h2 className="text-[#131313] text-[16px] font-semibold">{publisher}</h2>
            <h2 className="text-[#131313B3] text-[16px]">Year of Publishing:</h2>
            <h2 className="text-[#131313] text-[16px] font-semibold">{yearOfPublishing}</h2>
            <h2 className="text-[#131313B3] text-[16px]">Rating:</h2>
            <h2 className="text-[#131313] text-[16px] font-semibold">{rating}</h2>

          </div>

          {
            showreadbutton && <div className="flex justify-between md:justify-start gap-3 py-5">
            <button onClick={()=>handleAddReadBook(bookData)}  className=" text-black bg-transparent px-4  py-2 md:px-7 md:py-4 border border-[#1313134D]  rounded-xl">Read</button>
            <button onClick={()=>handleAddWishList(bookData)} className=" text-white px-4  py-2  bg-[#50B1C9] md:px-7 md:py-4 rounded-xl">Wishlist</button>
          </div>
          }
          {
            showbuybutton && <div className="flex justify-between md:justify-start gap-3 py-5">
            <button onClick={()=>handlebuyBook(bookData)} className=" bg-[#5d9e54f7] px-4  py-2 md:px-7 md:py-4 border ounded-xl rounded-xl text-white">Buy Now</button>
          </div>
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetailsCard;