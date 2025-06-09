import React from "react" 
import ProductCard from "../../components/ProductCard"
import Notification from "../../components/notification"
import WebInfo from "../../components/webInfo"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import CategoriesBtns from "../../components/CategoriesBtns"
import PageHeading from "../../components/PageHeading"
import slide2 from "../../assets/slide2.jpg"
import {productsInSale } from '../../assets/dataTest.js';





const Category = ()=>{
	
	return <div>
				<Notification/>
				<WebInfo/>
				<Navbar/>
				<CategoriesBtns/>
				<PageHeading image={slide2} text={"Women"} />
				<div className="wrapper">
					 <div className="grid grid-cols-12 my-[80px] gap-x-[10px] lg:gap-x-[30px] gap-y-[80px] lg:gap-y-[30px]">
				{
					productsInSale.map((product)=>{
						return <div className=" col-span-6 lg:col-span-4">
								<ProductCard product={product} height={"h-[350px] lg:h-[450px]"}/>
							  </div>
					})
				}
			</div>
				</div>	
				<Footer/>	
			</div>
}

export default Category