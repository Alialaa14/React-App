import React from "react"
import Notification from "../../components/notification"
import WebInfo from "../../components/webInfo"
import Navbar from "../../components/Navbar"
import PageHeading from "../../components/PageHeading"
import Footer from "../../components/Footer"
import { useNavigate } from 'react-router'
import { categories  } from '../../assets/dataTest.js';
import slide2 from "../../assets/slide2.jpg"



const Categories = ()=>{
 const navigate = useNavigate()
    const handleCatebtn = (e)=>{
        

        navigate(`/categories/category/${e.target.dataset.id}`)

    }

	return (
			<div>
				<Notification/>
				<WebInfo/>
				<Navbar/>
				<PageHeading image={slide2} text={"Collection"}/>
				<div className="wrapper">
					 <div className='categories-container my-[80px] grid grid-cols-12 gap-x-[10px] lg:gap-x-[30px] gap-y-[40px]  '>
	               	{
	               		categories.map((cate)=>{
	               			return <div  className='cursor-pointer h-[350px] lg:h-[470px] relative col-span-6 lg:col-span-4'>
						                    <img className='h-full w-full  ' src={cate.image} alt='category'/>
						                    <button onClick={(e)=>handleCatebtn(e)} data-id={cate.id} className='w-[150px] h-[40px] absolute bg-white text-black bottom-[20px] left-[50%] translate-x-[-50%] font-medium transition-all ease-in-out duration-500 hover:bg-black hover:text-white '>{cate.categoryName}</button>
						                </div>
		               		})
	               	} 
	               
           		 </div>
				</div>
				 <Footer/>
			</div>
		)
}


export default Categories