import {createBrowserRouter} from "react-router-dom";
import {Home, Contact} from "@/pages";
import {MainLayout} from "@/components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
])