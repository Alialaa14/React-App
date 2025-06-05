import React, { useState } from 'react'
import { categories , productsInSale } from '../../../../assets/dataTest.js';

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ProductCard from '../../../../components/ProductCard.jsx';
const SaleList = () => {
  const [translateX , settranslateX] = useState(0)

  const handleRightArrow = (productsInSale)=>{
    if (translateX!==(-1*(productsInSale.length * 100 - 400))) {
      settranslateX((prev)=>prev-100)
    }
  }

  const handleLeftArrow = (productsInSale)=>{
    if (translateX <0) {
      settranslateX((prev)=>prev+100)
    }
  }
  
  return (
    <div className="sale flex gap-[2%] group-hover:visible  group-hover:opacity-100 ">
              <div className="categorie-sale basis-[15%] flex flex-col gap-4">
              {categories.map((cate) => {
                return (
                  <p className="capitalize relative pb-3 cursor-pointer transition-all ease-in-out duration-300 font-medium hover:text-blue-300">
                    {cate}
                    <span className="absolute bottom-0 left-0 w-full h-[.5px] bg-slate-200"></span>
                  </p>
                );
              })}
            </div>

            <div className="product-sale basis-[85%] relative  flex overflow-hidden">
              {productsInSale.map((prod) => {
                return (
                  // To do when the link is not hover get the list from the beggining again
                  <div className={`prod-container px-3 transition-all ease-in-out duration-500`} style={{transform:`translateX(${translateX}%)`}}>
                    <ProductCard product={prod}/>
                  </div>
                );
              })}
              <div className='carousel-btn'>
                <button onClick={()=>handleRightArrow(productsInSale)} className='right absolute top-[40%] border-2 rounded-full border-black p-1 right-[4px] text-black translate-y-[-50%] transition-all ease-in-out duration-300 hover:bg-blue-300 hover:text-white hover:border-blue-300'>
                    <MdKeyboardDoubleArrowRight size={30}/>
                </button>

                <button onClick={()=>handleLeftArrow(productsInSale)} className='left absolute top-[40%] border-2 rounded-full border-black p-1 left-[4px] text-black translate-y-[-50%] transition-all ease-in-out duration-300 hover:bg-blue-300 hover:text-white hover:border-blue-300'>
                    <MdKeyboardDoubleArrowLeft size={30}/>
                </button>
              </div>
            </div>
            </div>

  )
}

export default SaleList