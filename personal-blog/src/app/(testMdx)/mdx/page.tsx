import Query from "../../../../database/query"
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import { unified } from 'unified'


async function markdownFile(){

  const file = await unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(await read(`/workspaces/personal-blog/personal-blog/src/app/_pagesmd/FirstPost.md`))

   await Query.createPost(file.stem!, String(file)); 
  
   console.log('Finish process')
}


export default async function Page() {

  await markdownFile();


  return (
    <div>
      page
      <span>Watch console</span>
    </div>
    
  )
}
