import {UserPlus} from "lucide-react";
import {useState} from "react";

export default function NavBar(){
    const [iconColor, setIconColor] = useState("#ffff");
    return <div className="max-w-screen justify-between items-center bg-blue-custom flex text-white nav-banner-custom">
        <nav className="flex max-w-screen justify-between items-center">
            <img src="/favicon.png" alt="corpos-logo" className="w-14.5 h-14.5 m-3"/>
            <ul className="flex h-full items-center gap-5 font-regular poppins-bold">
                <li>
                    <a href="#">A propos</a>
                </li>
                <li>
                    <a href="#">Évènements</a>
                </li>
                <li>
                    <a href="#">Actualités</a>
                </li>
                <li>
                    <a href="#">Réservations</a>
                </li>
                <li>
                    <a href="#">Communauté</a>
                </li>
            </ul>
        </nav>
        <div className="flex ">
            <div className="transition-smooth flex gap-2 max-h-full p-6 bg-green-custom button-y-hover cursor-pointer roboto font-bold"
                 onMouseOver={()=> setIconColor("#014aab")}
                 onMouseLeave={()=> setIconColor("#ffff")}>
                NOUS SUIVRE
                <UserPlus className="transition-smooth" color={iconColor} />
            </div>
            <div className="bebas-neue-bold h-full p-6 bg-yellow-dark-custom blue-custom text-2xl">
                #PDDC
            </div>
        </div>
    </div>
}











