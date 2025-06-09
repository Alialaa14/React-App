import React from 'react'
import slide3 from "../../../assets/slide3.jpg"
import { Link } from 'react-router'

const Heading = () => {
  return (
    <div className='heading h-[700px] relative' dir='rtl'>
        <div className='heading-img h-full' >
            <img className='h-full' src={slide3} alt='slid'></img>
            <div className='heading-details absolute top-[40%] right-[7%]'>
                <p className='text-xl uppercase font-medium font-serif'>New Season</p>
                <p className='capitalize text-5xl font-serif'>lookbook collection </p>
                 <button className='explore text-white relative bg-slate-800 mt-[10px] px-[20px] py-[7px] group'>
                    <p className='relative z-[995] '><Link to={'/categories'}>Explore Now</Link></p>
                    <span className='overlay block bg-blue-300 absolute bottom-0 left-0 w-full h-0 transition-all ease-in-out duration-300 group-hover:h-full '></span>
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Heading