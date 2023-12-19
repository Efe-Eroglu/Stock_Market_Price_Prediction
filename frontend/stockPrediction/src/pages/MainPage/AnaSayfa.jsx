import { useEffect, useState } from "react";
import "./anaSayfa.css";
import slider_content from "../../data/main_slider_data"; "../../data/main_slider_data"

const AnaSayfa = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider_content.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, slider_content.length]);

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

          <div className="carousel-inner">
            {slider_content.map((slide, index) => (
              <div
                key={index}
                className="carousel-item">
                <div className="row">
                  <div>
                    <div className="detail-box group">
                      <h1>
                        HİPER <br />
                        PARAMETRELER
                      </h1>
                      <p
                       style={{
                        transition: "opacity 0.9s",
                        opacity: index === currentIndex ? 1 : 0,
                      }}>{`${slide.text}`}</p>
                      <div className="btn-box">
                        <a href={`${slide.target}`} className="btn1">
                          Hemen İncele
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src={`${slide.img_path}`}
                        id="resim"
                        alt=""
                        style={{
                          transition: "opacity 0.9s",
                          opacity: index === currentIndex ? 1 : 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-button">
          <ol className="carousel-indicators">
            {slider_content.map((_, index) => (
              <li
                key={index}
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
