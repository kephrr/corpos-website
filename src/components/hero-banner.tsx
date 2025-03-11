import {MoveRight} from "lucide-react";
import {useState} from "react";

export default function HeroBanner() {
    const [iconColor, setIconColor] = useState("#ffff");
    return <div className="overflow-x-hidden max-w-screen p-10 bg-blue-dark-custom">
        <div className="hero-image">
            <div className="shadow-cover flex flex-col justify-end px-5 py-7">
                <h1 className="text-white bebas-neue-thick text-5xl">PANTHÈRES DE DAKAR CORPOS</h1>
                <p className="text-white">L'organisation de foot-ball communautaire des gabonais à Dakar</p>
            </div>
            <div className="flex flex-col justify-between min-h-60 max-w-100 absolute right-50 bottom-50 gap-3 bg-gray-900/50">
                <p className="text-white m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, animi, aperiam asperiores assumenda</p>
                <span className="flex gap-3 poppins-bold bg-green-custom button-y-hover text-white px-5 py-4 cursor-pointer transition-smooth"
                      onMouseOver={()=> setIconColor("#014aab")}
                      onMouseLeave={()=> setIconColor("#ffff")}
                >En savoir plus
                <MoveRight color={iconColor} /></span>
            </div>
        </div>
    </div>
}