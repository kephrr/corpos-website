import {RouteObject} from "react-router-dom";
import Home from "../pages/home.tsx";
import NotFound from '../pages/home.tsx';
import Reservation from "../pages/reservation.tsx";
import Successful from "../pages/successful.tsx";
import Admin from "../layouts/admin.tsx";
import EventCrud from "../pages/admin/events-crud.tsx";
import TicketsCrud from "../pages/admin/tickets-crud.tsx";
import Dashboard from "../pages/admin/dashboard.tsx";
import Laboratory from "../pages/laboratory.tsx";
import Default from "../layouts/default-layout.tsx";
import Evenements from "../pages/evenements.tsx";

export const routes: RouteObject[] = [
    {
        path: "/", element: <Default />,
        children: [
            { path:"home", index:true, element: <Home /> },
            { path: "reservation", element: <Reservation /> },
            { path: "evenements", element: <Evenements /> },
            { path: "isSuccessful", element: <Successful /> },
        ]
    },
    { path: "*", element: <NotFound /> },
    { path: "/lab", element: <Laboratory /> },
    // { path: "/explore/details/:id", element: <DetailProfile /> },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            { index:true, element: <Dashboard /> },
            { path: "events", element: <EventCrud /> },
            { path: "tickets", element: <TicketsCrud /> },
        ],
    },
];










