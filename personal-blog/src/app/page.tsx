"use client"

import Query from '../../database/query'
import { useAtom } from "jotai";
import { atom } from "jotai";
import PostList from "./(personal-blog)/_components/_postComponents/PostList";
import { useEffect } from 'react';

const Posts = atom([]);


export default function Home() {

  const [posts, setPosts] = useAtom(Posts);
  
  useEffect(() => {

    fetch('http://localhost:3000/api/posts').then(res => res.json()).then(res => setPosts(res.postsList!));

  },[]);
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <PostList posts={posts} />      
    </main>
  );
}
