import {House, UserPlus} from "lucide-react";
import {useState} from "react";

export default function NavBar(){
    const [iconColor, setIconColor] = useState("#ffff");
    const [textColor, setTextColor] = useState("");
    return <div className="w-screen max-w-screen justify-between items-center bg-blue-custom lg:max-h-14
                        lg:flex text-white fixed z-10">
        <nav className="flex max-w-screen justify-between items-center p-0 lg:p-2">
            <a href="/home" className="hidden lg:block">
                <img src="/favicon.png" alt="corpos-logo" className="w-10 h-10 m-2"/>
            </a>
            <ul className="h-full items-center gap-5 text-sm font-regular poppins-bold hidden lg:flex">
                <li className="">
                    <a href="#">A propos</a>
                </li>
                <li>
                    <a href="#">Évènements</a>
                </li>
                <li>
                    <a href="#">Réservations</a>
                </li>
            </ul>
        </nav>
        <div className="flex max-h-14">
            <a className="flex-1 flex justify-center items-center lg:hidden" href="/home">
                <House color="#ffff" />
            </a>
            <div className="flex-4 transition-smooth flex gap-1 lg:p-6 p-4
            bg-green-custom button-y-hover cursor-pointer roboto font-bold text-md
            flex justify-center lg:items-center"
                 onMouseOver={()=> {
                     setIconColor("#014aab")
                     setTextColor("text-blue-900")
                 }}
                 onMouseLeave={()=> {
                     setIconColor("#ffff")
                     setTextColor("")
                 }}>
                <p className={textColor}>NOUS SUIVRE</p>
                <UserPlus className="transition-smooth" color={iconColor} />
            </div>
            <div className="flex-1 bebas-neue-bold flex justify-center items-center px-10
            bg-yellow-dark-custom blue-custom text-xl">
                #PDDC
            </div>
        </div>
    </div>
}











