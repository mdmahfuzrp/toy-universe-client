import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { MagnifyingGlass } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-fit mx-auto mt-20'>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='white'
                color='#F87272'
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;