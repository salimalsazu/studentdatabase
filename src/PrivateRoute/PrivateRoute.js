import { Navigate, useLocation } from "react-router-dom";
import { useApi } from "../contextapi/ProviderContext";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useApi();

    const location = useLocation();

    if (loading) {
        return <h1 className="flex justify-center items-center h-screen animate-ping">Loading...</h1>
    }

    //navigate 
    if (user) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;


};

export default PrivateRoute;