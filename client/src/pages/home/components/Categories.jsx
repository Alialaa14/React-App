import React from 'react'
import womenCate from "../../../assets/womenCate.jpg"
import watchesCate from "../../../assets/watchesCate.jpg"
import footwear from "../../../assets/footwear.jpg"
import bag from "../../../assets/bag.jpg"
import { useNavigate } from 'react-router'
import '../home.css'

const Categories = () => {
    const navigate = useNavigate()
    const handleCatebtn = (e)=>{
        

        navigate("/category")

    }
  return (
    <div className='mt-[30px]'>
        <div className='wrapper'>
            <div className='categories-container grid grid-cols-12 grid-rows-12 lg:gap-x-[40px] gap-y-3 h-[1000px] lg:h-[600px]  '>
                <div className='women-cate cursor-pointer col-span-12 row-span-6  lg:col-span-6 lg:row-span-12 relative'>
                    <img className='h-full w-full  ' src={womenCate} alt='category'/>
                    <button onClick={(e)=>handleCatebtn(e)} className='w-[150px] h-[40px] absolute bg-white text-black bottom-[20px] left-[50%] translate-x-[-50%] font-medium transition-all ease-in-out duration-500 hover:bg-black hover:text-white ' data-cate="women">Women</button>
                </div>
                <div className='bag-cate cursor-pointer col-span-6  row-span-3 lg:row-span-6 lg:col-span-3 relative'>
                    <img className='h-full w-full' src ={bag} alt='category'/>  
                     <button onClick={(e)=>handleCatebtn(e)} className='w-[150px] h-[40px] absolute bg-white text-black bottom-[20px] left-[50%] translate-x-[-50%] font-medium transition-all ease-in-out duration-500 hover:bg-black hover:text-white ' data-cate="bag">Bag</button>
                </div>

                 <div className='ms-4 lg:ms-0  cursor-pointer watch-cate col-span-6 row-span-6 lg:row-span-12 lg:col-span-3 relative '>
                    <img className='h-full w-full' src ={watchesCate} alt='category'/>  
                     <button onClick={(e)=>handleCatebtn(e)} className='w-[150px] h-[40px] absolute bg-white text-black bottom-[20px] left-[50%] translate-x-[-50%] font-medium transition-all ease-in-out duration-500 hover:bg-black hover:text-white ' data-cate="accessories">Accessories</button>

                </div>
                <div className='footwear-cate cursor-pointer col-span-6  row-span-3 lg:row-span-6 lg:col-span-3 relative'>
                    <img className='h-full w-full' src ={footwear} alt='category'/>  
                     <button onClick={(e)=>handleCatebtn(e)} className='w-[150px] h-[40px] absolute bg-white text-black bottom-[20px] left-[50%] translate-x-[-50%] font-medium transition-all ease-in-out duration-500 hover:bg-black hover:text-white' data-cate="footwear"> Footwear</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories