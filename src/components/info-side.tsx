import Button from "./ui-ux/button.tsx";
import {InfoProps} from "../core/models/props.ts";


const Info: React.FunctionComponent<InfoProps> = ({img, label, title, date}: InfoProps) => {
    return <div className="flex gap-3 max-w-150 bg-white rounded-lg w-full lg:w-auto p-2">
        <img className="h-30 lg:h-60 rounded-lg" src={img} alt=""/>
        <div className="flex flex-col gap-2 items-start">
            <span className="bg-green-custom text-xs p-1 fon-medium md:px-2 md:px-1 md:font-semibold">{label}</span>
            <h1 className="bebas-neue-thick text-md lg:text-3xl">{title}</h1>
            <small>{date}</small>
            <Button content={"Voir plus"} colors={"bg-yellow-custom blue-dark-custom"}></Button>
        </div>
    </div>
}

export default Info;