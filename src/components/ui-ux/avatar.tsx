interface AvatarProps {
    name: string,
    h?: number;
    w?: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, h, w }: AvatarProps) => {
    const style = "p-1 relative inline-flex items-center justify-center w-"+{w}+" h-"+{h}+" overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
    return (
        <div
            className={(w && h)?style:"p-1 relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"}>
            <span className="font-medium text-xs text-gray-600 dark:text-gray-300">{name}</span>
        </div>

    )
}
export default Avatar;