import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ApartmentDetails from "../Pages/ApartmentDetails";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";


 const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('../../public/hotels.json')

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/apartment/:id',
                loader:()=> fetch('../../public/hotels.json'),
                element:<PrivateRoute><ApartmentDetails></ApartmentDetails></PrivateRoute>
            }
        ]
    }
 ])

 export default router;
