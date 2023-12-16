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

        <div className="flex space-x-4 mr-4">
          <a
            href="/"
            className="text-white hover:text-white active:text-white focus:text-white"
          >
            <span className="linkler">Ana Sayfa</span>
          </a>
          <a
            href="/share"
            className="text-white hover:text-white active:text-white focus:text-white"
          >
            <span className="linkler">Tablolar</span>
          </a>
          <a
            href="/team"
            className="text-white hover:text-white active:text-white focus:text-white"
          >
            <span className="linkler">Ekibimiz</span>
          </a>
          <a
            href="/about"
            className="text-white hover:text-white active:text-white focus:text-white"
          >
            <span className="linkler">Hakkımızda</span>
          </a>
          <a
            href="/login"
            className="text-white flex items-center hover:text-white active:text-white focus:text-white"
          >
            <FaRegUser className="text-lg mr-6 ml-2" />
          </a>
        </div>
        
      </header>
    </>
  );
};

export default Header;
