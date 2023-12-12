import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">Stock Prediction</div>
        <div className="right">
          
          <Link to="/">Ana Sayfa</Link>
          <Link to="/share">Tablolar</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/team">Ekibimiz</Link>
          <Link to="/contact">İletişim</Link>
          <Link to="/login">Giriş Yap</Link>

        </div>
      </div>
    </>
  );
};

export default Header;
