import Query from '../../../../../database/query'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try{
        const id = params.id

        const post = await Query.getPostById(Number(id));

        return Response.json({
            post
        })
    
    } catch(err){
        if(err instanceof Error){
            return Response.json({
                err
            })
        }
    }

}