import { useState } from "react";
import "./hamburgerMenu.css";
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

  const hamburger_content = [
    {
      name: "Akbank",
      target: "/share",
    },
    {
      name: "Alarko Holding",
      target: "/share",
    },
    {
      name: "Arçelik",
      target: "/share",
    },
    {
      name: "Aselsan",
      target: "/share",
    },
    {
      name: "Astor",
      target: "/share",
    },
    {
      name: "Bim A.Ş",
      target: "/share",
    },
    {
      name: "Emlak Konut GMYO",
      target: "/share",
    },
    {
      name: "Enka İnşaat",
      target: "/share",
    },
    {
      name: "Ereğli Demir Çelik",
      target: "/share",
    },
    {
      name: "Ford Otosan",
      target: "/share",
    },
    {
      name: "Granti BBVA",
      target: "/share",
    },
    {
      name: "Gübre",
      target: "/share",
    },
    {
      name: "Hektaş A.Ş",
      target: "/share",
    },
    {
      name: "İş Bankası",
      target: "/share",
    },
    {
      name: "Koç Holding",
      target: "/share",
    },
    {
      name: "Kontrolmatik",
      target: "/share",
    },
    {
      name: "Koza Altın",
      target: "/share",
    },
    {
      name: "Kardemir",
      target: "/share",
    },
    {
      name: "Odaş Elektrik",
      target: "/share",
    },
    {
      name: "Oyak Çimento",
      target: "/share",
    },
    {
      name: "Petkim",
      target: "/share",
    },
    {
      name: "Pegasus",
      target: "/share",
    },
    {
      name: "Sabancı Holding",
      target: "/share",
    },
    {
      name: "Sasa Polyester",
      target: "/share",
    },
    {
      name: "Şişe Cam",
      target: "/share",
    },
    {
      name: "Turkcell",
      target: "/share",
    },
    {
      name: "Şişe Cam",
      target: "/share",
    },
    {
      name: "Türk Hava Yolları",
      target: "/share",
    },
    {
      name: "Tofaş Oto",
      target: "/share",
    },
    {
      name: "Tüpraş",
      target: "/share",
    },
    {
      name: "Yapı Kredi",
      target: "/share",
    },
  ];

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
