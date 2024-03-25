
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBook from "../pages/ListedBook";
import PagesToRead from "../pages/PagesToRead";
import MainRoot from "../Root/MainRoot";
import BookDetails from "../pages/BookDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainRoot></MainRoot>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch('../../public/Data.json')
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
        loader:()=>fetch('../../public/Data.json')
      }
    ]
  }
])
export default router;