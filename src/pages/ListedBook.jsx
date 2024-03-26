import ReadBooks from "../Components/ReadBooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "../Components/WishList";
import { getDataInfo } from "../Hooks/useWishListLocalStore";
const ListedBook = () => {
  const datas = getDataInfo();
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
              <ReadBooks></ReadBooks>
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="mt-8 space-y-6"
            >
              {
                datas.map((data)=>(
                  <WishList data={data} key={data.bookId}></WishList>
                ))
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
