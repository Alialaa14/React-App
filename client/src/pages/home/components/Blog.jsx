import React from 'react'
import SectionHeading from "../../../components/SectionHeading"
import { blogs } from '../../../assets/dataTest'

const Blog = () => {
  return (
    <div className='blogs mt-[100px]'>
        <SectionHeading name={"LATES FROM BLOG"} desc={"The freshest and most exciting news"}/>
        <div className='wrapper'>
            <div className='blogs-container mt-[70px] flex flex-col lg:flex-row gap-y-[20px] lg:gap-4'>
                    {
                        blogs.map((blog)=>{
                            return    <div className='blog flex flex-col  flex-shrink-0 flex-grow-0 basis-[100%] lg:basis-[33%] px-[10%] lg:px-0 '>
                                           <div className='blog-img overflow-hidden h-[300px] cursor-pointer'>
                                                 <img className='w-full h-[400px] transition-all ease-in-out duration-700 hover:translate-y-[-30px]' src={blog.img} alt='blog'/>
                                           </div>
                                            <div className='blog-details'>
                                                <button data-id={blog.id} className='blog-btn font-medium transition-all ease-in-out duration-300 mt-[15px] hover:text-blue-300'>{blog.blogname}</button>
                                                <p className='text-gray-400 capitalize text-[14px] font-medium'>
                                                    by <span className='text-black me-1'>{blog.by}</span>
                                                     on <span className='text-black'>{blog.date}</span>
                                                </p>
                                                <p className='blog-desc mt-[15px] text-gray-400'>
                                                        {blog.description.substr(1 , 120) + " ,..."}
                                                </p>
                                            </div>
                                        </div>
                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default Blog