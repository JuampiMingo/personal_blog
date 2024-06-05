import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { personalBlogPosts } from './schema';
import { eq } from 'drizzle-orm';

const db = drizzle(postgres("postgres://juampi:root@127.0.0.1:5432/personal-blog"));

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    async getPosts(){
        try{
            const data = await db.select().from(personalBlogPosts)
            return data

        } catch(err){

            return Promise.resolve([])

        }
    },

    async createPost(title: string, content: string){
        try{
            console.log('saving post...')
            await db.insert(personalBlogPosts).values(
                {title: title, content: content}
            )
            console.log('Saved!!')

        } catch(err){
            if(err instanceof Error){
                return Promise.resolve(err)
            }
        }
    },

    async getPostById(id: number){
       try{
        const post = await db.select().from(personalBlogPosts).where(eq(personalBlogPosts.id, id));
        return post[0]
       } catch(err){
        if(err instanceof Error){
            return Promise.resolve(err)
        }
       }
    }
}