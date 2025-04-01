import {RouteObject} from "react-router-dom";
import Home from "./pages/home.tsx";
import NotFound from './pages/home.tsx';
import Reservation from "./pages/reservation.tsx";
import Successful from "./pages/successful.tsx";
import Admin from "./pages/admin.tsx";

export const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/reservation", element: <Reservation /> },
    { path: "/isSuccessful", element: <Successful /> },
    { path: "/admin", element: <Admin /> },
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