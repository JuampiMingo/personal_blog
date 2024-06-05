// Cambiar a server side rendering
import { TPost } from "../../interfaces"
import { redirect } from 'next/navigation'
import Query from "../../../../../database/query"
import {PostBody} from './_components/PostBody'

export default async  function Page(
    {
        params
    }: {
        params: { id: string }
    }
) {


    const post = await Query.getPostById(Number(params.id))

    if(post === undefined || post instanceof Error){
        return (
            <div>Error with api</div>
        )
    }

    return (
        <>
            <div className="p-12">

                <PostBody post={post}/>
            </div>
        </>
    )
}