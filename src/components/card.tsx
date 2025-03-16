import React from "react";
import {CardProps} from "../models/props.ts";

const Card: React.FC<CardProps> = ({ title, text, img, btn, btntext, btncolor }) => {
    const styleContainer = "card "+img+" bg-cover relative rounded-lg transition-smooth hover-interactive";
    const styleBtn = btncolor+" px-8 py-2 rounded-sm oswald-bold cursor-pointer";
    const styleShadow = "absolute linear-shadow w-full h-full rounded-lg flex flex-col justify-end p-2";
    return <div className={styleContainer} >
        <div className={styleShadow}>
            <h1 className="text-white bebas-neue-thick text-5xl">{title}</h1>
            <p className="text-white">{text}</p>
            {btn &&
                <a href="" className="">
                    <button className={styleBtn}>{btntext}</button>
                </a>
            }
        </div>
    </div>
}

export default Card;











