import "./anaSayfa.css";

const AnaSayfa = () => {
  return (


    <div className="sayfa p-0 m-0 ">
      
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
              <div className="">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>
                        HİPER <br />
                        PARAMETRELER
                      </h1>
                      <p>
                        Bist 30 hisseleri üzerinde State of Art modelinin en
                        doğru parametrelerle eğitilmiş modelini hemen incele!
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Hemen İncele
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img
                        src="mainPageImages/banner-img1.png"
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
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>

      
    </div>
  );
};

export default AnaSayfa;


