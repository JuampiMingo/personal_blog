import { FC } from "react"
import { TPost } from "../../interfaces"
import { PostCard } from "./PostCard"


type PostListProps = {
    posts: TPost[]
}


const PostList: FC<PostListProps> = ({posts}) => {

    if(posts.length < 1){
        return(
            <div className="my-24min-h-screen text-center">
                <h2 className="text-5xl font-semibold text-slate-700">Loading...</h2>
            </div>
        )
    }


    return(
        <div className="w-full min-h-screen flex flex-col flex-nowrap justify-between items-center">
            {
                posts.map((p,i) => {
                    return (
                        <PostCard key={i} post={p} />
                    )
                })
            }
        </div>
    )
}

export default PostList;