import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  IoIosArrowDown,
  IoIosPhotos,
  IoMdLocate,
  IoMdPhoneLandscape,
} from "react-icons/io";

import ca from "../../../assets/ca.svg";

const WebInfo = () => {
  const [languageList, showLanguageList] = useState(false);
  const [currencyList, showCurrencyList] = useState(false);
  const langRef = useRef(null);
  const currencyRef = useRef(null);

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
                <img src={ca} alt="canda" className="w-[12px] h-[12px]"></img>
                <span className="ms-1">Currency</span>
                <i className="pt-1">
                  <IoIosArrowDown />
                </i>
              </button>

              {currencyList && (
                <div className="list-container absolute  bg-white shadow-xl top-[100%] right-0 z-[999] ">
                  <div className="list py-[30px] ps-[15px] pe-[30px] pb-[30px]">
                    <ul className="w-[120px]">
                      <li className="flex items-center gap-1 mb-2">
                        <img
                          className="w-[14px] h-[14px]"
                          src={ca}
                          alt="canda"
                        ></img>
                        <button className="transition-all duration-300 hover:text-blue-300">
                          Canada - CAD $
                        </button>
                      </li>

                      <li className="flex items-center gap-1 mb-2">
                        <img
                          className="w-[14px] h-[14px]"
                          src={ca}
                          alt="canda"
                        ></img>
                        <button className="transition-all duration-300 hover:text-blue-300">
                          Canada - CAD $
                        </button>
                      </li>
                      <li className="flex items-center gap-1 mb-2">
                        <img
                          className="w-[14px] h-[14px]"
                          src={ca}
                          alt="canda"
                        ></img>
                        <button className="transition-all duration-300 hover:text-blue-300">
                          Canada - CAD $
                        </button>
                      </li>
                      <li className="flex items-center gap-1 mb-2">
                        <img
                          className="w-[14px] h-[14px]"
                          src={ca}
                          alt="canda"
                        ></img>
                        <button className="transition-all duration-300 hover:text-blue-300">
                          Canada - CAD $
                        </button>
                      </li>
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
