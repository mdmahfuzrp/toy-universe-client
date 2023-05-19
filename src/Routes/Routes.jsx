import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'addToy',
                element: <AddToy></AddToy>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/totalToys')
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;