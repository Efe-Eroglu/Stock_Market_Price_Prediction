import "./under.css";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";   
import { CiPhone } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const Under = () => {

  return (
    <>
    
        <div className="under w-full">
          <div className="left-under">
            <div className="baslik"><CiLocationOn  className="text-3xl"/><h1>Konum</h1></div>
            <p>Fırat Üniversitesi</p>
            <p>Elazığ/Merkez</p>
          </div>
          <div className="center-under">
            <div className="baslik"><CiPhone className="text-3xl"/><h1>İletişim</h1></div>
            <p>+900525226161</p>
            <p>stockprediction@gmail.com</p>
          </div>
          <div className="right-under">
            <div className="baslik"><IoShareSocialOutline className="mr-1 mt-1 text-3xl"/><h1>Bize Katıl</h1></div>
            <div className="sosyal mt-2">
              <a href="#" target="blank"><CiFacebook className="text-5xl mr-3"/></a>
              <a href="#" target="blank"><CiTwitter className="text-5xl mr-3"/></a>
              <a href="#" target="blank"><FaInstagram className="text-5xl mr-3"/></a>
              <a href="#" target="blank"><FaThreads className="text-5xl"/></a>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Under;
