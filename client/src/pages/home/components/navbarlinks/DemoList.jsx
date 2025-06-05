import React from 'react'
import { demos } from '../../../../assets/dataTest';
import { Link } from 'react-router';

const DemoLinks = () => {
  return (
     <div className="demo-lst group-hover:visible group-hover:opacity-100 grid grid-cols-4 gap-x-2 gap-y-[20px] overflow-y-scroll">
                {demos.map((demo) => {
                  return (
                    <div className="demo group/demo mb-3">
                      <Link to={demo.link}>
                        <div className="demo-img transtion-all ease-in-out duration-500 group-hover/demo:-translate-y-3">
                          <img src={demo.img} alt={demo.des} />
                        </div>
                        <span className="transition-all ease-in-out duration-300 block text-center font-serif text-sm capitalize font-medium mt-2 group-hover/demo:text-blue-300">
                          {demo.des}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
  )
}

export default DemoLinks