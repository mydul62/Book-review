
import Card from "./Card";
const AllBooks = ({datas}) => {
  return (
    <div className=" max-w-7xl mx-auto my-10">

      <div className=" flex justify-center mb-4">
        <h2 className="  text-[40px] font-bold font-Playfair">Books</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
         datas.map((data)=>(
          <Card data={data} key={data.bookId}></Card>
         ))
        }
      </div>
    </div>
  );
};

export default AllBooks;
