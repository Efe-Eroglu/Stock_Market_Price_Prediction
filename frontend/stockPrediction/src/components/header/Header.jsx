import "./header.css";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header w-screen h-16 flex items-center justify-between pl-0 pt-0 ml-0 mb-10">
        <div className="text-white ml-4 text-2xl">Stock Prediction</div>
        <div className="flex space-x-4 mr-4">
          <Link to="/" className="text-white">
            <span className="a">Ana Sayfa</span>
          </Link>
          <Link to="/share" className="text-white">
          <span className="a">Tablolar</span>
          </Link>
          <Link to="/about" className="text-white">
          <span className="a">Hakkımızda</span>
          </Link>
          <Link to="/team" className="text-white">
          <span className="a">Ekibimiz</span>
          </Link>
          <Link to="/contact" className="text-white">
          <span className="a">İletişim</span>
          </Link>
          <Link to="/login" className="text-white flex items-center">
            <FaRegUser className="text-lg mr-2 ml-2" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
