import React from 'react'
import { product } from '../../assets/dataTest';
import { Link } from 'react-router';

const ProductList = () => {
  return (
    <div className="product group-hover:visible group-hover:opacity-100 grid grid-cols-4 gap-[30px] overflow-y-scroll left-[10%] w-[80%] ">
                {Object.entries(product).map(([key, value]) => {
                  return (
                    <div className="product-cate">
                      <p className="pb-4 relative">
                        {key}
                        <span className="absolute bottom-0 left-0 w-full h-[.5px] bg-slate-200"></span>
                      </p>
                      <ul className="flex flex-col gap-4 mt-5">
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
  )
}

export default ProductList