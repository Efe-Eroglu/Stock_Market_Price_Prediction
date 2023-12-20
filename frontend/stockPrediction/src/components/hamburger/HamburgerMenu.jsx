import { useState } from "react";
import "./hamburgerMenu.css";
import hamburger_content from "../../data/hisse_data"

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
        {hamburger_content.map((item, index) => (
          <div key={index}>
            <a href={item.target}>{item.name}</a>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default HamburgerMenu;

