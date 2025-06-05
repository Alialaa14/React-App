import React from 'react'
import { shop } from '../../../../assets/dataTest';
import { Link } from 'react-router';
import slide3 from "../../../../assets/slide3.jpg";
import slide2 from "../../../../assets/slide2.jpg";

const ShopList = () => {
  return (
     <div className="shop-lst group-hover:visible group-hover:opacity-100">
                <div className="shop-container grid grid-cols-2 gap-4">
                  <div className="left-side grid grid-cols-3 gap-2">
                    {Object.entries(shop).map(([key, value]) => {
                      return (
                        <div className="advantages">
                          <p className="advg-head relative pb-4">
                            {key}
                            <span className="absolute bottom-0 left-0 w-full h-[.5px] bg-slate-200"></span>
                          </p>
                          <ul className="flex flex-col gap-4 mt-[15px]">
                            {value.map((item) => {
                              return (
                                <li className="cursor-pointer text-sm transition-all duration-300 text-slate-400 hover:text-blue-300">
                                  <Link to={"/sale"}>{item}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
    
                  <div className="right-side grid grid-cols-2 gap-4">
                    <div className="img h-[300px] relative">
                      <img className="h-full" src={slide3} alt="img"></img>
                      <button className="absolute bottom-[10%] left-[50%] text-[18px] font-medium translate-x-[-50%] text-black bg-white w-[150px] h-[40px] rounded transition-all ease-in-out duration-300 hover:bg-black hover:text-white">
                        Women
                      </button>
                    </div>
    
                    <div className="img h-[300px] relative">
                      <img className="h-full" src={slide2} alt="img"></img>
                      <button className="absolute bottom-[10%] left-[50%] text-[18px] font-medium translate-x-[-50%]  text-black bg-white w-[150px] h-[40px] rounded transition-all ease-in-out duration-300 hover:bg-black hover:text-white">
                        Men
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default ShopList