import React from "react";

interface CardProps {
    h: number;
    w:number;
    title:string;
    text:string;
    img:string;
    btn?: boolean;
    btntext?:string;
    btncolor?:string;
}

const Card: React.FC<CardProps> = ({ h, w, title, text, img, btn, btntext, btncolor }) => {
    const styleContainer = "w-"+w+" h-"+h+" "+img+" bg-cover rounded-lg transition-smooth hover-interactive";
    const styleBtn = btncolor+" px-8 py-2 rounded-sm bebas-neue-thick text-xl cursor-pointer";
    const styleShadow = "absolute linear-shadow h-"+h+" w-"+w+" rounded-lg flex flex-col justify-end p-2";
    return <div className={styleContainer} >
        <div className={styleShadow}>
            <h1 className="text-white bebas-neue-thick text-5xl">{title}</h1>
            <p className="text-white text-sm">{text}</p>
            {btn &&
                <a href="" className="">
                    <button className={styleBtn}>{btntext}</button>
                </a>
            }
        </div>
    </div>
}

export default Card;











