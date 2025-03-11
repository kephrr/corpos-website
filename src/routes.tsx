import {RouteObject} from "react-router-dom";
import Home from "./pages/home.tsx";
import NotFound from './pages/home.tsx';

export const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    // { path: "/explore/details/:id", element: <DetailProfile /> },
    /*{
        path: "/explore",
        element: <ExploreLayout />,
        children: [
            { path: "", element: <Explore /> },
            { path: "details/:id", element: <DetailProfile /> },
        ],
    },*/
];