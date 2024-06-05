import { TPost } from "@/app/(personal-blog)/interfaces"
import { FC } from "react"



type PostBodyProps = {
    post: TPost
}


export const PostBody: FC<PostBodyProps> = ({post}) => {

    return(
        <div className=" relative p-4 min-h-screen flex flex-col justify-between items-center">
                <h3 className="text-5xl text-slate-800">{post.title}</h3>
                <div className="bg-slate-800 h-1"></div>
                <section className="my-8 w-full">
                    <p className="text-balance text-center">{post.content}</p>
                </section>
            </div>
    )


}