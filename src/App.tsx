import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./core/routes.tsx";
import "./App.css";

document.title = 'Site officiel des panthères de Dakar Corpos'

const App = () => {
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default App;
