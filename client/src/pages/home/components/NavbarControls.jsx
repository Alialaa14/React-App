import React from 'react'
import { IoMdCart, IoMdHeartEmpty, IoMdPerson, IoMdSearch } from "react-icons/io";
const NavbarControls = () => {
  return (
         <div className="navbar-controls flex gap-3">
            <button className="transition-all duration-300 hover:text-blue-300">
                <IoMdSearch size={22}/>
            </button>

            <button className="transition-all duration-300 hover:text-blue-300">
                <IoMdPerson size={22}/>
            </button>

            <button className="transition-all duration-300 hover:text-blue-300 relative">
                <IoMdHeartEmpty size={22}/>
                <span className="block  absolute w-[17px] h-[17px] text-[10px] bg-black text-white rounded-full top-[-10px] right-[-10px]">0</span>
            </button>

            <button className="transition-all duration-300 hover:text-blue-300 relative">
                <IoMdCart size={22}/>
                <span className="block  absolute w-[17px] h-[17px] text-[10px] bg-black text-white rounded-full top-[-10px] right-[-10px]">0</span>

            </button>
          </div>
  )
}

export default NavbarControls