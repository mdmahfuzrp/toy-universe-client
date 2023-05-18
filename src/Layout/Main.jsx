import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="px-5 w-full md:w-11/12 mx-auto mt-5">
            <Outlet />
        </div>
    );
};

export default Main;