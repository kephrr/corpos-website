import {MoveRight} from "lucide-react";
import {useState} from "react";

export default function HeroBanner() {
    const [iconColor, setIconColor] = useState("#ffff");
    return <div className="overflow-x-hidden max-w-screen p-10 bg-blue-dark-custom pattern-foot">
        <div className="hero-image md:w-230 md:h-80 md:mx-6">
            <div className="shadow-cover md:w-230 md:h-80 flex flex-col justify-end
                            p-2 lg:px-5 lg:py-7">
                <h1 className="text-white bebas-neue-thick text-3xl md:text-5xl">PANTHÈRES DE DAKAR CORPOS</h1>
                <p className="text-white text-sm ">L'organisation de foot-ball communautaire des gabonais à Dakar</p>
            </div>
            <div className="flex flex-col justify-between min-h-60 max-w-100 absolute
            lg:right-50 lg:bottom-50 gap-3 bg-gray-900/50 hidden md:block">
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