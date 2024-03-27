
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBook from "../pages/ListedBook";
import PagesToRead from "../pages/PagesToRead";
import MainRoot from "../Root/MainRoot";
import BookDetails from "../pages/BookDetails";
import ErrorPage from "../pages/ErrorPage";
import BuyBooks from "../pages/BuyBooks";
import Shoped from "../pages/Shoped";
import BuyBookDetails from "../pages/BuyBookDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainRoot></MainRoot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home/>,
        loader:()=>fetch('/Data.json')
      },
      {
        path:"/listedbooks",
        element:<ListedBook/>
      },
      {
        path:"/pagestoread",
        element:<PagesToRead/>
      },{
        path:'/bookdetails/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/Data.json'),
      },{
        path:"/buybook",
        element:<BuyBooks></BuyBooks>,
        loader:()=>fetch('/BookData.json')
      },{
        path:"/shoped",
        element:<Shoped></Shoped>,
      },
      {
        path:'/buybookdelatis/:id',
        element:<BuyBookDetails></BuyBookDetails>,
        loader:()=>fetch('/BookData.json'),
      }
    ]
  }
])
export default router;