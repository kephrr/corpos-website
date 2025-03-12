import Button from "./button.tsx";

interface InfoProps {
    img:string,
    label:string,
    title:string,
    date:string
}

const Info: React.FunctionComponent<InfoProps> = ({img, label, title, date}: InfoProps) => {
    return <div className="flex gap-3 max-w-150">
        <img className="h-60" src={img} alt=""/>
        <div className="flex flex-col gap-5 items-start">
            <span className="bg-green-custom px-2 px-1 font-semibold">{label}</span>
            <h1 className="bebas-neue-thick text-3xl">{title}</h1>
            <small>{date}</small>
            <Button content={"Voir plus"} colors={"bg-yellow-custom blue-dark-custom"}></Button>
        </div>
    </div>
}

export default Info;