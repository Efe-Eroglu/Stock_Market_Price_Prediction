import { useEffect, useState } from "react";
import "./model.css";
import slider_content from "../../data/model_data";

const Model = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="models">

      <h1>{`${slider_content[currentIndex].title}`}</h1>
      <div className="icerik">
        <div className="hisse-tablo">
          <img
            src={`${slider_content[currentIndex].img_path}`}
            id="tablo"
            alt=""
          />
        </div>
        <div className="hisse-yazi pr-4">
          <p>{`${slider_content[currentIndex].text1}`}</p>
          <br />
          <p>{`${slider_content[currentIndex].text2}`}</p>
        </div>
      </div>

      <div className="table-button">
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
      <div className="model-back"></div>
    </div>
  );
};

export default Model;