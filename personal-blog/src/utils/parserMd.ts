import Query from "../../database/query"
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import { unified } from 'unified'

export async function markdownFile(url:string){

    const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(url))
  
     await Query.createPost(file.stem!, String(file)); 
    
     console.log('Finish process')
  }