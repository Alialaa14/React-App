import React from "react"
import {categories} from "../assets/dataTest.js"
import {useNavigate} from "react-router"


const CategoriesBtns = ()=>{
	const navigate = useNavigate()

	return (
		<div className="flex  py-[20px] justify-center border-t-[1px] border-gray-200">
				<div className="flex gap-4">
					{
						categories.map((cate)=>{
							return <button onClick={(e)=>navigate(`/categories/category/${e.target.dataset.id}`)} data-id = {cate.id} className="transition-all ease-in-out duration-500 hover:text-blue-300">
								{
									cate.categoryName
								}
							</button>
						})
					}
				</div>
		</div>
		)
}

export default CategoriesBtns