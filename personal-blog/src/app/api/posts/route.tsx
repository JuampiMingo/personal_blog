import Query from '../../../../database/query'


export async function GET(req: Request){

    const postsList = await Query.getPosts();

    return Response.json({
        postsList
    });
}