import React from 'react'
import {
  IoIosHeartEmpty,
  IoMdCart,
  IoMdEye,
} from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";

import "./ProductCard.css"
const ProductCard = ({product , height}) => {
  return (
    <div className='product-card'>
        <div className={`prod-img mb-3  ${height}  cursor-pointer group/img relative overflow-hidden`}>
                      <img className="h-full w-full" src={product.img} alt="img" />
                      <div className="whishlst-compare absolute top-[15px] left-[10px] flex flex-col gap-3">
                        <button className="love group/button group-hover/img:left-0 duration-300  ">
                          <IoIosHeartEmpty size={20} />
                          <span className="block absolute text-[9px] min-w-[100px] px-2 right-[-112px]   top-[50%] translate-y-[-50%] opacity-0 invisible bg-black text-white py-[6px]   capitalize group-hover/button:visible group-hover/button:opacity-75">
                           add to whish list
                          </span>
                        </button>
                        <button className="compare group/button group-hover/img:left-0 duration-700">
                          <IoIosGitCompare size={20} />
                          <span className="block absolute text-[9px] px-2 right-[-65px] min-w-[40px] top-[50%] translate-y-[-50%] opacity-0 invisible bg-black text-white py-[6px]  capitalize group-hover/button:visible group-hover/button:opacity-75">
                            Compare
                          </span>
                        </button>
                      </div>
                      <div className=" prod-control opacity-0 absolute flex flex-col gap-1 top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/img:top-[50%] group-hover/img:opacity-100 transition-all ease-in-out duration-500">
                            <button className="relative group/btn h-[45px] bg-white text-[14px] overflow-hidden  text-black  w-[150px] rounded-full outline-none hover:bg-black transition-all ease-in-out duration-300">
                                <span className="block  transition-all ease-in-out duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/btn:top-[140%] ">Quick View</span>
                                <span className="block top-[140%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-300  group-hover/btn:top-[50%]  text-white ">
                                    <IoMdEye size={22}/>
                                </span>
                            </button>
                            <button className="relative group/btn h-[45px] bg-blue-300 text-[14px] overflow-hidden  text-white  w-[150px] rounded-full outline-none  transition-all ease-in-out duration-300">
                                <span className="block  transition-all ease-in-out duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/btn:top-[140%] ">Quick View</span>
                                <span className="block top-[140%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-300  group-hover/btn:top-[50%]  text-white ">
                                    <IoMdCart size={22}/>
                                </span>
                            </button>
                            
                      </div>
                      <div className="sizes absolute bottom-[10px] text-[14px] text-white left-[60%] translate-x-[-50%] transition-all ease-in-out duration-300 opacity-0 group-hover/img:opacity-100 group-hover/img:left-[50%] ">
                        <p>
                            {
                                product.sizes.join(",")
                            }
                        </p>
                      </div>

                    </div>
                    <div className="prod-details">
                        <p className="prod-name">{product.name}</p>
                        <span className="prod-price text-gray-500 line-through mr-2">{product.price}$</span>
                        <span className="prod-finalprice text-red-500 font-medium">{product.finalprice}$</span>
                        <div className="colors flex gap-3 mt-2">
                            {
                                product.colors.map((color)=>{
                                    return <span className={`block relative h-4 w-4 rounded-full cursor-pointer group/color`} style={{backgroundColor:color.hex}}>
                                        <span className=" z-[999] absolute top-[-30px] right-[50%] translate-x-[50%] text-[10px] py-[4px] px-3 bg-black text-white opacity-0 group-hover/color:opacity-75">{color.name}</span>
                                    </span>
                                })
                            }
                        </div>
                    </div>
    </div>
  )
}

export default ProductCard