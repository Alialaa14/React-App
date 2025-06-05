import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { PiLifebuoy } from "react-icons/pi";

const Follow = () => {
  return (
    <div className="mt-[100px]">
      <SectionHeading name={"@ FOLLOW US ON INSTAGRAM"} />
      <div className="wrapper">
        <div className="advantges mt-[50px] flex flex-col justify-center  lg:justify-start  lg:flex-row gap-[30px] text-gray-300">
          <div className="flex flex-col items-center lg:flex-row text-center lg:text-left  gap-[20px] ">
            <i className="transtion-all ease-in-out duration-200 ">
              <FaShippingFast size={40} />
            </i>
            <div>
              <p className="text-black text-md font-medium text-[15px]">FREE SHIPPING</p>
              <p className="mt-1 text-sm ">
                Free shipping on all US order or order above $100
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row text-center lg:text-left  gap-[20px]">
            <i>
              <GiReturnArrow size={40} />
            </i>
            <div>
              <p className="text-black text-md font-medium text-[15px]">30 DAYS RETURN</p>
              <p className="mt-1 text-sm">
                Simply return it within 30 days for an exchange.
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] flex-col items-center lg:flex-row text-center lg:text-left">
            <i>
              <GrSecure size={40} />
            </i>
            <div>
              <p className="text-black text-md font-medium text-[15px]">100% PAYMENT SECURE</p>
              <p className="mt-1 text-sm">
               We ensure secure payment with PEV
              </p>
            </div>
          </div>

          <div className="flex  gap-[20px] flex-col items-center lg:flex-row text-center lg:text-left">
            <i>
              <PiLifebuoy size={40} />
            </i>
            <div>
              <p className="text-black text-md font-medium text-[15px]">SUPPORT 24/7</p>
              <p className="mt-1 text-sm">
               Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
