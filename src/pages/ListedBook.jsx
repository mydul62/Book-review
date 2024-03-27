import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../Components/ReadBooks";
import WishList from "../Components/WishList";
import { getDataInfo } from "../Hooks/useWishListLocalStore";
import { getReadDataInfo } from "../Hooks/useReadBooks";

const ListedBook = () => {
  const [datas, setWishData] = useState([]);
  const [Bookdatas, setBookData] = useState([]);

  useEffect(() => {
    const bookdata = getReadDataInfo();
    setBookData(bookdata);
  }, []);

  useEffect(() => {
    const WishDats = getDataInfo();
    setWishData(WishDats);
  }, []);

  const handleSort = (event) => {
    let sortedBookData;
    let sortedWishData;
    const targetValue = parseInt(event.target.value);
    if (targetValue === 1) {
      sortedBookData = [...Bookdatas].sort((a, b) => b.rating - a.rating);
      sortedWishData = [...datas].sort((a, b) => b.rating - a.rating);
    }else if (targetValue === 2) {
      sortedBookData = [...Bookdatas].sort((a, b) => b.totalPages - a.totalPages);
      sortedWishData = [...datas].sort((a, b) => b.totalPages - a.totalPages);
    }else if (targetValue === 3) {
      sortedBookData = [...Bookdatas].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      sortedWishData = [...datas].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setBookData(sortedBookData);
    setWishData(sortedWishData);
  };
  

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className=" flex justify-center items-center py-8 bg-[#1313130D] rounded-xl">
          <h2 className=" text-[#131313] font-bold font-sans text-3xl">Book</h2>
        </div>
        <div className="flex justify-center  py-6">
          <select onChange={handleSort} className="select select-info bg-[#23BE0A] border-none  w-[200px]">
            <option selected disabled defaultValue>
              Sort By
            </option>
            <option value={1}>Rating</option>
            <option value={2}>Number of pages</option>
            <option value={3}>Publisher Year</option>
          </select>
        </div>
      </div>
      <div className="">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className=" mt-8 space-y-6">
              {Bookdatas.map((data) => (
                <ReadBooks data={data} key={data.bookId}></ReadBooks>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8 space-y-6">
              {datas.map((data) => (
                <WishList data={data} key={data.bookId}></WishList>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
