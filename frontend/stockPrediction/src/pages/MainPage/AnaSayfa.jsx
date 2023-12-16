import { useState } from "react";
import "./anaSayfa.css";

const AnaSayfa = () => {
  
  const slider_content = [
    {
      img_path: "/mainPageImages/slider1.png",
      text:
        "Bist 30 hisseleri üzerinde Artificial Neutral Network modelinin en doğru parametrelerle eğitilmiş modelini incele!",
        target:"/ai-models",
    },
    {
      img_path: "/mainPageImages/slider2.png",
      text:
        "Bist 30 hisseleri üzerinde Decision Tree modelinin en doğru parametrelerle eğitilmiş modelini incele!",
        target:"/ai-models",
    },
    {
      img_path: "/mainPageImages/slider3.png",
      text:
        "Bist 30 hisseleri üzerinde Random Forest modelinin en doğru parametrelerle eğitilmiş modelini incele!",
        target:"/ai-models",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="block">
        <img src="mainPageImages/hero-bg.png" className="heroBg" alt="" />
      </div>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner z-5">
            <div className="carousel-item active">
              <div>
                <div className="row">
                  <div>
                    <div className="detail-box group">
                      <h1>
                        HİPER <br />
                        PARAMETRELER
                      </h1>
                          <p>
                            {`${slider_content[currentIndex].text}`}
                          </p>
                      <div className="btn-box">
                        <a href={`${slider_content[currentIndex].target}`} className="btn1">
                          Hemen İncele
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src={`${slider_content[currentIndex].img_path}`}
                        id="resim"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-button">
          <ol className="carousel-indicators">
            {slider_content.map((slide, index) => (
              <li 
                key={index}
                data-target="#customCarousel1"
                data-slide-to={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => changeSlide(index)}
              ></li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default AnaSayfa;
