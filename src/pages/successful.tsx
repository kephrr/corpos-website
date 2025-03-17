import NavBar from "../components/navabar.tsx";
//import Footer from "../components/footer.tsx";
// import {CircleCheckBig} from "lucide-react";

function Successful(){
    return<div>
        <NavBar></NavBar>
        <div className="flex flex-col m-20 items-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                 stroke="#00c164" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-circle-check-big">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                <path d="m9 11 3 3L22 4"/>
            </svg>
            <h1>Réservation effectuée avec succès</h1>
        </div>
    </div>
}

export default Successful;