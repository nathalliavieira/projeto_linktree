import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin";
import { Networks } from "./pages/networks";
import { ErrorPage } from "./pages/error";

import { Private } from "./routes/Private";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/admin",
        element: <Private><Admin/></Private>  //Assim é como protegemos uma página. Ele vai passar primeiro pelo private, se o private permitir renderizar, daí ele irá renderizar o children, que no caso é a página Admin.
    },
    {
        path:"/admin/social",
        element: <Private><Networks/></Private>
    },
    {
        path: "*",
        element: <ErrorPage/>
    }

])

export {router}