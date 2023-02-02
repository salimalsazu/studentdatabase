import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import AddStudent from "../pages/studentdb/AddStudent";
import ManageStudent from "../pages/studentdb/ManageStudent";
import Reg from '../pages/Login/Reg'
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/addstudent',
                        element: <AddStudent></AddStudent>
                    },
                    {
                        path: '/dashboard/managestudent',
                        element: <ManageStudent></ManageStudent>
                    }
                ]
            },
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }
        ]
    }

])