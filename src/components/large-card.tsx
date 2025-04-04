import React from "react"
import {LargeCardProps} from "../core/models/props.ts";

const LargeCard: React.FC<LargeCardProps> = ({ title, text, img, btntext, btncolor }: LargeCardProps) => {

    const styleContain = "w-full h-90 bg-blue-custom rounded-lg relative "+img;
    const styleBtn = btncolor+" px-8 py-2 rounded-sm oswald-bold cursor-pointer";
    const styleShadow = "absolute linear-shadow w-full h-90 rounded-lg flex flex-col justify-end p-2";
    return <div className={styleContain}>
        <div className={styleShadow}>
            <h1 className="text-white bebas-neue-thick text-5xl">{title}</h1>
            <p className="text-white">{text}</p>
            <a href="" className="">
                <button className={styleBtn}>{btntext}</button>
            </a>
        </div>
    </div>
}

export default LargeCard;