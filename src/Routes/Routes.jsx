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
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/MyToys/UpdateToy";
import ToyDetails from "../components/AllToys/ToyDetails";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/toys')
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
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/totalToys')
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'myToys/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'allToys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;