import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  IoIosArrowDown,
  IoIosPhotos,
  IoMdLocate,
  IoMdPhoneLandscape,
} from "react-icons/io";

import ca from "../assets/ca.svg";
import {currencies} from "../assets/dataTest.js"

const WebInfo = () => {
  const [languageList, showLanguageList] = useState(false);
  const [currencyList, showCurrencyList] = useState(false);
  const [currencyValue , setCurrencyValue] = useState({image:ca , abbr:"Canda"})
  const langRef = useRef(null);
  const currencyRef = useRef(null);

  const handleCurrency = (e)=>{
      const currencyImage = e.target.dataset.img
      const currencyAbr  = e.target.dataset.abr

      setCurrencyValue({image:currencyImage , abbr:currencyAbr})
      showCurrencyList(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langRef.current &&
        !langRef.current.contains(event.target) &&
        currencyRef.current &&
        !currencyRef.current.contains(event.target)
      ) {
        showLanguageList(false);
        showCurrencyList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="web-info bg-slate-100">
      <div className="wrapper">
        <div className="web-info-container px-3 py-3  text-[13px] text-slate-400 flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-between">
          <div className="provider-info hidden lg:flex gap-3">
            <div className="P-phone flex items-center gap-1 ">
              <i>
                <IoIosPhotos />
              </i>
              <span className="cursor-pointer transition-all duration-300 hover:text-blue-300">
                01006610650
              </span>
            </div>
            <div className="P-email flex items-center gap-1">
              <i>
                <IoMdPhoneLandscape />
              </i>
              <span className="cursor-pointer transition-all duration-300 hover:text-blue-300">
                alifouda1474@gmail.com
              </span>
            </div>
          </div>

          <div className="text-banner">
            <div className="flex">
              <p>
                Summer sale discount off{" "}
                <span className="text-red-800">50%</span>!
              </p>
              <Link to={"/sale"}>
                <span className="transition-all duration-300 hover:text-blue-300">
                  Shop Now
                </span>
              </Link>
            </div>
          </div>

          <div className="lang-currency flex  gap-3   ">
            <div className="location flex gap-1 items-center">
              <i>
                <IoMdLocate />
              </i>
              <span className="transition-all duration-300 hover:text-blue-300">
                <Link to={"/sale"}>Location</Link>
              </span>
            </div>

            <div ref={langRef} className="lang relative ">
              <button
                onClick={() => {
                  showLanguageList(!languageList);
                  showCurrencyList(false);
                }}
                className="flex items-center  transition-all duration-300 hover:text-blue-300 "
              >
                <span>Language</span>
                <i className="pt-1">
                  <IoIosArrowDown />
                </i>
              </button>

              {languageList && (
                <div className="list-container absolute  bg-white shadow-xl top-[100%] right-0 z-[999]">
                  <div className="list py-[30px] ps-[15px] pe-[50px] pb-[30px] ">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <button className="transition-all ease-in-out duration-500 hover:text-blue-300">
                          English
                        </button>
                      </li>
                      <li>
                        <button className="transition-all ease-in-out duration-500 hover:text-blue-300">
                          العربية
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div ref={currencyRef} className="currency relative ">
              <button
                onClick={() => {
                  showCurrencyList(!currencyList);
                  showLanguageList(false);
                }}
                className="flex items-center  transition-all duration-300 hover:text-blue-300 "
              >
                <img src={currencyValue.image} alt="canda" className="w-[14px] h-[14px]"></img>
                <span className="ms-1">{currencyValue.abbr}</span>
                <i className="pt-1">
                  <IoIosArrowDown />
                </i>
              </button>

              {currencyList && (
                <div className="list-container absolute bg-white shadow-xl min-w-[200px] max-w-[300px] top-[100%] right-0 z-[999] ">
                  <div className="list py-[30px] ps-[15px] pb-[30px]">
                    <ul className="">
                        {
                          currencies.map((curr)=>{
                            return  <li className="flex items-center gap-1 mb-2">
                                        <img
                                          className="w-[14px] h-[14px]"
                                          src={curr.image}
                                          alt="canda"
                                        ></img>
                                      <button onClick={(e)=>handleCurrency(e)} data-img={curr.image} data-abr={curr.abbreviation} className="transition-all duration-300 hover:text-blue-300">
                                        {
                                          curr.country + " - " + curr.abbreviation + " " + curr.symbol
                                        }
                                      </button>
                      </li>
                          })
                        }
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebInfo;
