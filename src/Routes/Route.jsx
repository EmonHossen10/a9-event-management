import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import US from "../Pages/US/US";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import UpcomingCourse from "../Pages/UpcomingCourse/UpcomingCourse";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("/data.json") 
         
      },
      {
        path:"/service/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch("/data.json")
      },
      {
        path:"/about",
        element:  <PrivateRoute><US></US></PrivateRoute>
      },
      {
        path:"/upcoming",
        element:  <PrivateRoute><UpcomingCourse></UpcomingCourse></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ],
  },
]);

export default router;
