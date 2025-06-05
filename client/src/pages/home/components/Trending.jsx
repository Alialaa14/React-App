import React from 'react'
import {productsInSale} from "../../../assets/dataTest.js"
import ProductCard from "../../../components/ProductCard.jsx"
import SectionHeading from "../../../components/SectionHeading.jsx"
const Trending = () => {
  return (
    <div className='trending mt-[140px] mb-[20px]'>
        <SectionHeading name={"trending"} desc={"Top view in this week"}/>

        <div className='wrapper'>
            <div className='trending-products flex gap-x-[2.5%] gap-y-[40px] flex-wrap mt-[50px]'>
            {productsInSale.map((prod) => {
                            return (
                              // To do when the link is not hover get the list from the beggining again
                              <div className={`prod-container px-3 transition-all ease-in-out duration-500  flex-shrink-0 flex-grow-0 basis-[48.7%] md:basis-[31.6%] lg:basis-[23.1%]`}>
                                  <ProductCard product={prod}/>
                              </div>
                            );
                          })}

        </div>
              <div className='load-btn-container flex justify-center'>
                <button className='relative load-more capitalize text-black border-2 border-black overflow-hidden rounded-full px-[35px] py-[10px] mt-[90px] transition-all ease-in-out duration-500 group hover:border-blue-300 hover:text-white '>
                load more
                <span className='overlay inline-block h-full w-0 absolute left-0 top-0 rounded-full z-[-1] transition-all ease-in-out duration-700 bg-blue-300 group-hover:w-full'></span>
              </button>
              </div>
        </div>
    </div>
  )
}

export default Trending