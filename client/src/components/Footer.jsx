import React , {useState} from 'react'
import logo from "../assets/logo.jpg"
import {FaEnvelopeOpen, FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaPhone, FaPinterest, FaTwitter} from "react-icons/fa6"
const Footer = () => {
    const [showlist ,setshowList] = useState(null)
    const toggleList = (list)=>{
       setshowList((prev)=>prev===list ? null : list)

    }
  return (
    <div className="footer bg-gray-300 mt-[40px] py-[20px] lg:py-[100px]  ">
        <div className='wrapper'>
            <div className='footer-container hidden md:flex lg:flex-row md:flex-col gap-y-[20px] text-gray-400'>
               <div className="footer-info flex md:gap-[10%] lg:gap-[5%] md:gap-y-[40px] lg:gap-y-[0] flex-wrap basis-[80%]  ">
                  <div className='web-info flex-shrink-0 flex-grow-0 max-lg:basis-[40%]'>
                      <div className='heading mb-[45px]'>
                         <img src={logo} alt='logo'/>
                      </div>
                      <ul className='flex flex-col gap-[30px]'>
                        <li className='flex gap-3'>
                            <i>
                              <FaLocationPin size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>
                        <li className='flex gap-3'>
                            <i>
                              <FaPhone size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>

                        <li className='flex gap-3'>
                            <i>
                              <FaEnvelopeOpen size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>

                        <li className='flex gap-3'>
                           <a href='http://www.facebook.com'><FaFacebook/></a>
                           <a href='http://www.instagram.com'><FaInstagram/></a>
                           <FaTwitter/>
                           <FaLinkedin/>
                           <FaPinterest/>
                        </li>

                      </ul>
                  </div>
                  <div className='footer-cat-links flex-shrink-0 flex-grow-0 max-lg:basis-[40%]'>
                      <div className='heading mb-[45px]'>
                         <p className='text-lg text-black font-medium'>Categories</p>
                      </div>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Women</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Men</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Accessories</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Shoes</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Bags</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Watches</a>
                        </li>


                      </ul>
                  </div>
                  <div className='information-links flex-shrink-0 flex-grow-0 max-lg:basis-[40%]'>
                       <div className='heading mb-[45px]'>
                         <p className='text-lg text-black font-medium'>Information</p>
                      </div>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>About us</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Contack us</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Terms & Condtions</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Returns & Exhanges</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Shipping & Delivery</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Privacy Policy</a>
                        </li>


                      </ul>
                  </div>
                  <div className='useful-links flex-shrink-0 flex-grow-0 max-lg:basis-[40%]'>
                      <div className='heading mb-[45px]'>
                         <p className='text-lg text-black font-medium'>Useful Links</p>
                      </div>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Latest News</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>My Account</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Size Quide</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Faqs</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Fagqs2</a>
                        </li>
                      </ul>
                  </div>
               </div>

               <div className='newsletter-signUp basis-[20%]'>
                    <div className='heading mb-[45px]'>
                         <p className='text-lg text-black font-medium'>Useful Links</p>
                      </div>

                      <p className='mb-[20px]'>Subscribe to our newsletter and get 10% off your first purchase</p>

                      <div className='subcribe-form border-2 relative border-black px-[10px] py-[7px]  rounded-full max-lg:w-[50%]'>
                        <input type='text' placeholder='Your Email Address' className='bg-transparent outline-none w-[60%] placeholder:text-[12px]'/>
                        <button className='subscribe-btn  absolute top-[50%] translate-y-[-50%] right-[5px] px-[20px] text-[14px] font-medium text-white p-[5px] bg-black rounded-full'>
                          Subscribe
                        </button>
                        
                      </div>
               </div>
            </div>

            <div className="footer-mobile block md:hidden">
                <div className='relative '>
                     <button data-list="webinfo" onClick={(e)=>toggleList(e.currentTarget.dataset.list)}>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] right-[5%]"></span>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] rotate-90 right-[5%]"></span>
                      </button>

                    <p className="text-[18px] font-medium mb-[30px]">Get in Touch</p>

                    <div  className={`web-info transition-all ease-in-out duration-300 overflow-hidden ${showlist==="webinfo"?'h-[270px]':'h-0'}`}>
                      <div className='heading mb-[45px]'>
                         <img src={logo} alt='logo'/>
                      </div>
                      <ul className='flex flex-col gap-[30px]'>
                        <li className='flex gap-3'>
                            <i>
                              <FaLocationPin size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>
                        <li className='flex gap-3'>
                            <i>
                              <FaPhone size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>

                        <li className='flex gap-3'>
                            <i>
                              <FaEnvelopeOpen size={20}/>
                            </i>
                            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                        </li>

                        <li className='flex gap-3'>
                           <a href='http://www.facebook.com'><FaFacebook/></a>
                           <a href='http://www.instagram.com'><FaInstagram/></a>
                           <FaTwitter/>
                           <FaLinkedin/>
                           <FaPinterest/>
                        </li>

                      </ul>

                     
                  </div>
                </div>

                <div className="relative">
                    <button data-list="links" onClick={(e)=>toggleList(e.currentTarget.dataset.list)}>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] right-[5%]"></span>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] rotate-90 right-[5%]"></span>
                      </button>

                    <p className="text-[18px] font-medium mb-[30px]">Category Links</p>
                    <div className={`footer-cat-links transition-all ease-in-out duration-300 overflow-hidden ${showlist==="links"?'h-[270px]':'h-0'}`}>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Women</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Men</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Accessories</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Shoes</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Bags</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Watches</a>
                        </li>


                      </ul>
                  </div>
                </div>

                 <div className="relative">
                    <button data-list="info" onClick={(e)=>toggleList(e.currentTarget.dataset.list)}>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] right-[5%]"></span>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] rotate-90 right-[5%]"></span>
                      </button>

                    <p className="text-[18px] font-medium mb-[30px]">Information</p>
                     <div className={`information-links transition-all ease-in-out duration-300 overflow-hidden ${showlist==="info"?'h-[270px]':'h-0'} `}>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>About us</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Contack us</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Terms & Condtions</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Returns & Exhanges</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Shipping & Delivery</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Privacy Policy</a>
                        </li>


                      </ul>
                  </div>
                 </div>   

               <div className="relative">
                <button data-list="useful" onClick={(e)=>toggleList(e.currentTarget.dataset.list)}>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] right-[5%]"></span>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] rotate-90 right-[5%]"></span>
                      </button>

                    <p className="text-[18px] font-medium mb-[30px]">Useful Links</p>
                   <div className={`useful-linksc transition-all ease-in-out duration-300 overflow-hidden ${showlist==="useful"?'h-[270px]':'h-0'}`}>
                      <ul className='flex flex-col gap-[15px]'>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Latest News</a>
                        </li>
                       <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>My Account</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Size Quide</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Faqs</a>
                        </li>
                        <li>
                           <a href='/sale' className=' text-sm transition-all ease-in-out hover:text-blue-300'>Fagqs2</a>
                        </li>
                      </ul>
                  </div>
               </div>

               <div className="relative">
                     <button data-list="Subscribe" onClick={(e)=>toggleList(e.currentTarget.dataset.list)}>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] right-[5%]"></span>
                          <span className="absolute w-[12px] h-[2px] bg-gray-400 top-[39px] rotate-90 right-[5%]"></span>
                      </button>

                    <p className="text-[18px] font-medium mb-[30px]">Subscribe</p>

                    <div className={`newsletter-signUp max-lg:w-[50%] transition-all ease-in-out duration-300 overflow-hidden ${showlist==="Subscribe"?'h-[270px]':'h-0'} `}>
                      <p className='mb-[20px]'>Subscribe to our newsletter and get 10% off your first purchase</p>

                      <div className='subcribe-form border-2 relative border-black px-[10px] py-[7px]  rounded-full '>
                        <input type='text' placeholder='Your Email Address' className='bg-transparent outline-none w-[60%] placeholder:text-[12px]'/>
                        <button className='subscribe-btn  absolute top-[50%] translate-y-[-50%] right-[5px] px-[20px] text-[14px] font-medium text-white p-[5px] bg-black rounded-full'>
                          Subscribe
                        </button>
                        
                      </div>
               </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer