import React from "react";
import {CardProps} from "../core/models/props.ts";

const Card: React.FC<CardProps> = ({ title, text, img, url, btn, btntext, btncolor }) => {
    const styleContainer = "card "+img+" bg-cover relative rounded-lg transition-smooth hover-interactive overflow-hidden";
    const styleBtn = btncolor+" px-8 py-2 rounded-sm oswald-bold cursor-pointer";
    const styleShadow = "absolute linear-shadow w-full h-full rounded-lg flex flex-col justify-end p-2";
    return <div className={styleContainer} >
        <div className={styleShadow}>
            <h1 className="text-white bebas-neue-thick text-3xl">{title}</h1>
            <p className="text-white text-sm mb-1">{text}</p>
            {btn &&
                <a href={url} className="">
                    <button className={styleBtn}>{btntext}</button>
                </a>
            }
        </div>
    </div>
}

export default Card;











