import Blog from "../Components/Banner/Blog/Blog";
import Contact from "../Components/Banner/ContactUs/Contact";
import Login from "../Components/Banner/Login/Login";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/ContactUs',
                element: <Contact></Contact>
            },
            {
                path: '/Login',
                element: <Login></Login>
            }

        ]
    }
])

export default router;