import React from "react";
import Navbar from "@/components/Navbar";


function Page() {
  return (
    <div>
      <h1 className="font-bold text-xl">CreatePost</h1>
      <form>
        <textera className="border border-black w-[400px] h-[80px] resize-none" />
        <br />
        <button className="p-3 bg-blue-600 text-white w-full">Post</button>
      </form>

     

     <div>
      <CreatePost />
      
     </div>



    </div>
  );
}



export default Page;