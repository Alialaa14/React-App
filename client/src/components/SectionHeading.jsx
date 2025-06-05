import React from 'react'

const SectionHeading = ({name , desc}) => {
  return (
    <div className='heading text-center'>
              <h2 className=' inline-block text-lg lg:text-2xl font-medium  uppercase relative px-2'>{name}
                <span className='absolute top-[50%] translate-y-[-50%] h-[2px] w-[20%]  bg-black right-[100%]'></span>
               <span className='absolute top-[50%] translate-y-[-50%] h-[2px] w-[20%] bg-black left-[100%] '></span>
            </h2>
            <h4 className='text-sm text-gray-400 mt-[5px] '>{desc}</h4>
      </div>
  )
}

export default SectionHeading