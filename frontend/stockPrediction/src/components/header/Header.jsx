import "./header.css";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header w-screen h-16 flex items-center justify-between pl-0 pt-0 mb-10">
        
        <div className="left-side">
          <div className="hamburger-menu ml-7">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="text-white text-3xl" id="yazi">Stock Market Prediction</div>
        </div>
        
        <div className="flex space-x-4 mr-4">
          <Link to="/" className="text-white hover:text-white active:text-white focus:text-white" >
            <span className="linkler">Ana Sayfa</span>
          </Link>
          <Link to="/share" className="text-white hover:text-white active:text-white focus:text-white">
          <span className="linkler">Tablolar</span>
          </Link>
          <Link to="/about" className="text-white hover:text-white active:text-white focus:text-white">
          <span className="linkler">Hakkımızda</span>
          </Link> 
          <Link to="/team" className="text-white hover:text-white active:text-white focus:text-white">
          <span className="linkler">Ekibimiz</span>
          </Link>
          <Link to="/contact" className="text-white hover:text-white active:text-white focus:text-white">
          <span className="linkler">İletişim</span>
          </Link>
          <Link to="/login" className="text-white flex items-center hover:text-white active:text-white focus:text-white">
            <FaRegUser className="text-lg mr-6 ml-2" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
