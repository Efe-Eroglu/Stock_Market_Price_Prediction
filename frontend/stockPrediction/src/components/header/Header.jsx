import { useState } from "react";
import "./header.css";
import { FaRegUser, FaWindows } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import HamburgerMenu from "../hamburger/HamburgerMenu";

const Header = () => {
  
  const user = localStorage.getItem("user");

  return (
    <>
      <header className="header !w-full h-16 flex items-center justify-between pl-0 pt-0">
        <div className="left-side">
          <HamburgerMenu />

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

          {/*Kullanıcı öğesi olunca favoriler ve çıkış ikonunu getir*/}
         
          {user && (
            <div className="flex items-center">
              <a href="/favourite-list">
                <span className="linkler">Favoriler</span>
              </a>
              <a onClick={()=>{
                if(window.confirm("Çıkış yapmak istediğinize emin misiniz?")){
                  localStorage.removeItem("user")
                  window.location.href="/home";
                }
              }}> <IoIosLogOut className="text-2xl ml-3 cursor-pointer"/> </a>
            </div>
          )}


          {/*Kullanıcı öğesi olmadığında giriş yap butonunu getirir*/}
          {!user && (
            <a href="/login" className="flex items-center">
              <FaRegUser className="text-lg mr-2 ml-2" />
            </a>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
