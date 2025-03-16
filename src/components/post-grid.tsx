import {PostProps} from "../models/props.ts";

interface PostGridProps {
    posts: PostProps[];
}

function PostGrid({ posts }: PostGridProps) {
    return <div className=" grid grid-cols-3 gap-1">
            {posts.map((p: PostProps) => (
                <div className="max-h-100 transition-smooth overflow-hidden relative
                flex flex-col items-center justify-center">
                    <img className="w-full" src={p.image} alt="IMAGE"/>
                    <div className="flex flex-col justify-between p-5 absolute transition-smooth opacity-0 hover:opacity-85
                    blue-dark-custom bg-gray-100 h-100">
                        <h1 className="text-2xl bebas-neue-regular">@{p.pseudo}</h1>
                        <p className=" align-center">{p.text}</p>
                        <div className="flex justify-between">
                            <p>{p.social}</p>
                            <p>{p.date}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
}

export default PostGrid;