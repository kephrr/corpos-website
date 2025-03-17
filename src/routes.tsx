import {RouteObject} from "react-router-dom";
import Home from "./pages/home.tsx";
import NotFound from './pages/home.tsx';
import Reservation from "./pages/reservation.tsx";
import Successful from "./pages/successful.tsx";

export const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/reservation", element: <Reservation /> },
    { path: "/isSuccessful", element: <Successful /> },
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