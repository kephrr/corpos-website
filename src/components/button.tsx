import React from "react";
import {ButtonProps} from "../core/models/props.ts";

const Button:React.FC<ButtonProps> =({content, colors}:  ButtonProps)=> {
    const style = "px-4 py-1 md:px-8 md:py-2 rounded-sm bebas-neue-thick text-md md:text-xl cursor-pointer "+colors;
    return <button className={style}>{content}</button>;
}

export default Button;