import React from "react";
import "./NavLinks.css";

import DemoLinks from "./navbarlinks/DemoList.jsx";
import ShopList from "./navbarlinks/ShopList.jsx";
import ProductList from "./navbarlinks/ProductList.jsx";
import SaleList from "./navbarlinks/SaleList.jsx";
import SellButton from "./navbarlinks/SellButton.jsx";
import BlogList from "./navbarlinks/BlogList.jsx";

const NavbarLinks = () => {
  return (
    <div className="navbar-links ">
      <ul className="flex gap-[32px]">
        <li className="group">
          <button>Demo</button>
          <DemoLinks/>
        </li>
        <li className="group">
          <button className="relative">
            Shop
            <span className="effect absolute top-[-75%] right-[-10px] bg-blue-400 text-white text-[12px] rounded-full py-[1px] px-[10px]">
              New
            </span>
          </button>
         <ShopList/>
        </li>
        <li className="group">
          <button>Product</button>
          <ProductList/>
        </li>
        
        <li className="group">
          <button className="relative">
            Sale
            <span className="effect absolute top-[-90%] right-[-10px] bg-yellow-400 text-white text-[12px] rounded py-[3px] px-[3px]">
              New
            </span>
          </button>
          <SaleList/>
        </li>
        <li className="group">
          <button>Blog</button>
          <BlogList/>
        </li>
        <li className="group">
          <button>Sell</button>
          <SellButton/>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
