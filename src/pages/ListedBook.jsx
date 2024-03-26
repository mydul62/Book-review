import ReadBooks from "../Components/ReadBooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "../Components/WishList";
import { deleteDataInfo, getDataInfo } from "../Hooks/useWishListLocalStore";
import { useEffect, useState } from "react";
import { getReadDataInfo } from "../Hooks/useReadBooks";
const ListedBook = () => {
  const [datas, setWishData] = useState([]);
  const [Bookdatas, setBookData] = useState([]);

  useEffect(() => {
     const bookdata=getReadDataInfo() ;
     setBookData(bookdata)
  }, []);

  useEffect(() => {
    const bookDats = getDataInfo();
    setWishData(bookDats);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className=" mt-8 space-y-6">
              {
                Bookdatas.map((data)=>(
                  <ReadBooks data={data} key={data.bookId}></ReadBooks>

                ))
              }
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
