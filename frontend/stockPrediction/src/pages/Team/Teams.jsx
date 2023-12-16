import "./team.css";

const Teams = () => {
  return (

    <div className="ekip-icerik">
      
      <div className="wrapper">
        <div className="ust-icerik ">
          <h3 className="mt-20 text-6xl text-white">Ekibimiz</h3>
          <div className="ekip mt-10">
            <div className="uye">
              <div className="left">
                <div className="fotograf" id="efe"> Efe </div>
              </div>
              <div className="right">
                <h1 className="text-2xl">
                  Scrum Master & Frontend Geliştirici
                </h1>
                <h2 className="text-xl mb-2">Efe Eroğlu</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  repellat culpa, ad maiores excepturi doloribus, impedit quo
                  nesciunt veniam minima suscipit, dolorum omnis! Facilis
                  similique sint, magni laboriosam culpa animi?
                </p>
              </div>
            </div>

            <div className="uye">
              <div className="left">
                <div className="fotograf">
                  Ahmet
                </div>
              </div>
              <div className="right">
                <h1 className="text-2xl">Yapay Zeka Geliştirici</h1>
                <h2 className="text-xl mb-2">Ahmet Utku Karagülle</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  repellat culpa, ad maiores excepturi doloribus, impedit quo
                  nesciunt veniam minima suscipit, dolorum omnis! Facilis
                  similique sint, magni laboriosam culpa animi?
                </p>
              </div>
            </div>

            <div className="uye">
              <div className="left">
                <div className="fotograf">Faik</div>
              </div>
              <div className="right">
                <h1 className="text-2xl">Veri Tabanı Sorumlusu</h1>
                <h2 className="text-xl mb-2">Faik Arda Güler</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  repellat culpa, ad maiores excepturi doloribus, impedit quo
                  nesciunt veniam minima suscipit, dolorum omnis! Facilis
                  similique sint, magni laboriosam culpa animi?
                </p>
              </div>
            </div>

            <div className="uye">
              <div className="left">
                <div className="fotograf">Emir</div>
              </div>
              <div className="right">
                <h1 className="text-2xl">Backend Geliştirici</h1>
                <h2 className="text-xl mb-2">Emir Can Bacanak</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  repellat culpa, ad maiores excepturi doloribus, impedit quo
                  nesciunt veniam minima suscipit, dolorum omnis! Facilis
                  similique sint, magni laboriosam culpa animi?
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      

      <div className="back w-screen h-screen -z-50">
        <img
          src="/teamImages/banner-bg.png"
          className="w-screen h-screen"
          alt=""
        />
        <img
          src="/teamImages/banner-bg2.png"
          className="w-screen h-screen"
          alt=""
        />
      </div>
    </div>
  );
};

export default Teams;
