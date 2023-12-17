import { useState } from "react";
import "./header.css";
import { FaRegUser } from "react-icons/fa";
import HamburgerMenu from "../hamburger/HamburgerMenu";
const Header = () => {
 

  return (
    <>
      <header className="header !w-full h-16 flex items-center justify-between pl-0 pt-0">
        <div className="left-side">

        <HamburgerMenu/>
          
          <div className="text-white text-3xl" id="yazi">
            Stock Market Prediction
          </div>
        
        </div>

        <div className="head flex space-x-4 mr-4">
          <a href="/home">
            <span className="linkler">Ana Sayfa</span>
          </a>
          <a href="/ai-models">
            <span className="linkler">Modeller</span>
          </a>
          <a href="/share">
            <span className="linkler">Tablolar</span>
          </a>
          <a href="/team">
            <span className="linkler">Ekibimiz</span>
          </a>
          
          <a href="/login"
            className="flex items-center"
          >
            <FaRegUser className="text-lg mr-6 ml-2" />
          </a>
        </div>
        
      </header>
    </>
  );
};

export default Header;
