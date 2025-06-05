import React from "react";
import post1 from "../../../assets/post1.jpg";
import post2 from "../../../assets/post2.jpg";
import "./Posts.css"

const Posts = () => {
  return (
    <div className="mt-[100px]">
      <div className="wrapper">
        <div className="posts-container flex-col lg:flex-row gap-y-[30px] lg:gap-x-[30px] flex">
          <div className="post relative h-[300px] overflow-hidden bg-yellow-400">
            <img className=" w-full h-full" src={post1} alt="post"></img>
            <div className="post-desc absolute text-center text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="uppercase text-md lg:text-xl font-medium">summer sale</span>
                <h2 className="uppercase text-3xl lg:text-5xl font-medium">up to 70%</h2>
            </div>
          </div>
          <div className="post relative h-[300px] overflow-hidden">
            <img className="h-full w-full" src={post2} alt="post" />
             <div className="post-desc absolute text-center text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="uppercase text-md lg:text-xl font-medium">summer sale</span>
                <h2 className="uppercase text-3xl lg:text-5xl font-medium">up to 70%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
