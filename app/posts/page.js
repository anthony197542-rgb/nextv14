import React from "react";
import Navbar from "@/components/Navbar";
import CreatePost from "@/components/CreatePost";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


async function Page() {
 
 
 const posts = await getDocs(collection(db, "posts"))
 
 
  return (
    <div>
<div>
      <CreatePost />
      
     </div>
     <ul>
      {posts.docs.map(p => <li key={p.id}>{p.data().post}</li>)}
     </ul>
</div>
  );
}



export default Page;