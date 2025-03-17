import {House, UserPlus} from "lucide-react";
import {useState} from "react";

export default function NavBar(){
    const [iconColor, setIconColor] = useState("#ffff");
    return <div className="max-w-screen justify-between items-center bg-blue-custom
                        lg:flex text-white">
        <nav className="flex max-w-screen justify-between items-center p-0 lg:p-2">
            <a href="/home" className="hidden lg:block">
                <img src="/favicon.png" alt="corpos-logo" className="w-14 h-14 m-3"/>
            </a>
            <ul className="h-full items-center gap-5 font-regular poppins-bold hidden lg:flex">
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
        <div className="flex">
            <a className="flex-1 flex justify-center items-center lg:hidden" href="/home">
                <House color="#ffff" />
            </a>
            <div className="flex-3 transition-smooth flex gap-2 max-h-full p-6 bg-green-custom button-y-hover cursor-pointer roboto font-bold"
                 onMouseOver={()=> setIconColor("#014aab")}
                 onMouseLeave={()=> setIconColor("#ffff")}>
                NOUS SUIVRE
                <UserPlus className="transition-smooth" color={iconColor} />
            </div>
            <div className="flex-1 bebas-neue-bold h-full p-6 bg-yellow-dark-custom blue-custom text-2xl">
                #PDDC
            </div>
        </div>
    </div>
}











