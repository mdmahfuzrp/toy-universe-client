import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="w-full mx-auto mt-5 sm:px-0">
            <Outlet />
        </div>
    );
};

export default Main;