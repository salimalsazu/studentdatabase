import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import AddStudent from "../pages/studentdb/AddStudent";
import ManageStudent from "../pages/studentdb/ManageStudent";
import Reg from '../pages/Login/Reg'
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../pages/studentdb/Details";
import EditData from "../pages/studentdb/EditData";
import HomeDashboard from "../Dashboard/HomeDashboard";

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
                        path: '/dashboard',
                        element: <HomeDashboard></HomeDashboard>
                    },
                    {
                        path: '/dashboard/addstudent',
                        element: <AddStudent></AddStudent>
                    },
                    {
                        path: '/dashboard/managestudent',
                        element: <ManageStudent></ManageStudent>
                    },
                    {
                        path: '/dashboard/details/:id',
                        loader: ({ params }) => fetch(`https://studentdatabase.vercel.app/students/${params.id}`),
                        element: <Details></Details>
                    },
                    {
                        path: '/dashboard/edit/:id',
                        loader: ({ params }) => fetch(`https://studentdatabase.vercel.app/students/${params.id}`),
                        element: <EditData></EditData>
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