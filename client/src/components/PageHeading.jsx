import React from "react"


const PageHeading = ({image , text})=>{

	return (
			<div className="h-[100px] relative overflow-hidden">
				<img src={image} alt="image" className="h-full w-full"/>
				<p className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-center text-xl font-medium">
					{
						text
					}
				</p>
			</div>
		)
}


export default PageHeading