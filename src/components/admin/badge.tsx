interface BadgeProps {
    content: string,
    color: number|undefined
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
    // dark
    let style = "";
        switch (props.color) {
            case 1 :// blue
                style = "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300";
                break;
            case 2 :// green
                style = "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
                break;
            case 3 :
                // yellow
                style = "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300"
                break;
            case 4 : // red
                style = "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                break;
            default :
                style = "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300";
                break;
        }
        return <span
        className={style}>{props.content}</span>;
}

export default Badge;