import { useState } from "react";
import "./hamburgerMenu.css"
const HamburgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const updateMenu = () => {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
      setIsMenuClicked(!isMenuClicked);
    };

  return (
    <div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className={menu_class}>
            <div className="akbank">Akbank</div>
            <div className="akbank">Alarko Holding</div>
            <div className="akbank">Arçelik</div>
            <div className="akbank">Aselsan</div>
            <div className="akbank">Astor</div>
            <div className="akbank">Bim A.Ş</div>
            <div className="akbank">Emlak Konut GMYO</div>
            <div className="akbank">Enka İnşaat</div>
            <div className="akbank">Ereğli Demir Çelik</div>
            <div className="akbank">Ford Otosan</div>
            <div className="akbank">Granti BBVA</div>
            <div className="akbank">Gübre</div>
            <div className="akbank">Hektaş A.Ş</div>
            <div className="akbank">İş Bankası</div>
            <div className="akbank">Koç Holding</div>
            <div className="akbank">Kontrolmatik</div>
            <div className="akbank">Koza Altın</div>
            <div className="akbank">Kardemir</div>
            <div className="akbank">Odaş Elektrik</div>
            <div className="akbank">Oyak Çimento</div>
            <div className="akbank">Petkim</div>
            <div className="akbank">Pegasus</div>
            <div className="akbank">Sabancı Holding</div>
            <div className="akbank">Sasa Polyester</div>
            <div className="akbank">Şişe Cam</div>
            <div className="akbank">Turkcell</div>
            <div className="akbank">Türk Hava Yolları</div>
            <div className="akbank">Tofaş Oto</div>
            <div className="akbank">Tüpraş</div>
            <div className="akbank">Yapı Kredi</div>

          </div>
    </div>
  )
}

export default HamburgerMenu