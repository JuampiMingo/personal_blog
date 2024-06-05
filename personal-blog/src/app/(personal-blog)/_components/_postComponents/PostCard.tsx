import { TPost } from "../../interfaces";
import { ButtonLink } from "./ButonLink";

export function PostCard({post}: {post: TPost}){

    return(
        <div className=" relative w-3/4 p-12 my-4 min-h-12 bg-sky-300 flex flex-row">
           <div className="min-h-12 w-full">
            <p className="text-sm text-slate-500">{post.createdAt.slice(0,11)}</p>
            <h3 className="py-2 text-3xl underline">{post.title}</h3>
           </div>
           <div className="mx-6 flex flex-col">
                <span className="my-3">{post.content.toString().substring(0,150)}...</span>
                <ButtonLink href={`/posts/${post.id}`}>See More</ButtonLink>
           </div>

        </div>
    )

}