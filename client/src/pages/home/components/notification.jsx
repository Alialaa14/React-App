import React , {useState} from 'react'
import { Link } from 'react-router'
import { IoMdArrowForward, IoMdClose } from "react-icons/io";

const Notification = () => {
     const [shownotifcation , setshownotifcation] = useState(true)
  return (
      <div className={`notification-wrapper bg-rose-600 text-center overflow-hidden text-white relative transition-all duration-950 ${shownotifcation?'p-4':'p-0 h-0 '}`}>
                    <p className='text-[12px] lg:text-sm'>
                        <Link to={"/sale"}>
                               <div className='flex  justify-center items-center'>
                                    <p>Today deal sale 70% . Ends in.</p>
                                    <span className='transition-all duration-400 ms-1  hover:opacity-70'>Hurry Up</span>
                                    <i className='ms-1 transition-all duration-900 hover:translate-x-[4px]'>
                                        <IoMdArrowForward/>
                                    </i>
                               </div>
                        </Link>
                    </p>
    
                    <button onClick={()=>setshownotifcation(false)} className='cursor-pointer text-[10px] lg:text-[14px] absolute right-[1%] top-[50%] translate-y-[-50%] flex items-center justify-center transition-all duration-700 hover:opacity-70'>
                        <i><IoMdClose /></i>
                        <span >Close</span>
                    </button>
            </div>
    
  )
}

export default Notification