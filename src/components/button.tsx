import React from "react";

interface ButtonProps {
    content: string;
    colors: string;
}

const Button:React.FC<ButtonProps> =({content, colors}:  ButtonProps)=> {
    const style = "px-8 py-2 rounded-sm bebas-neue-thick text-xl cursor-pointer "+colors;
    return <button className={style}>{content}</button>;
}

export default Button;