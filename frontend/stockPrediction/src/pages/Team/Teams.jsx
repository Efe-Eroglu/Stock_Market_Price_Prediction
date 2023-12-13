import "./team.css";
import Header from "../../components/header/Header";

const Teams = () => {
  return (
    <>
      <Header />

      <div className="back">
        <img src="/teamImages/banner-bg.png" className="w-screen h-screen" alt="" />
        <img src="/teamImages/banner-bg2.png" className="w-screen h-screen" alt="" />
      </div>

      <h3 className="mt-20 text-6xl text-white">Ekibimiz</h3>
      
        <div className="ekip mt-10">
          <div className="uye">
            <div className="left">
              <div className="fotograf"> efe foto</div>
            </div>
            <div className="right">
              <h1 className="text-2xl">Scrum Master & Frontend Geliştirici</h1>
              <h2 className="text-xl mb-2">Efe Eroğlu</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat culpa, ad maiores excepturi doloribus, impedit quo nesciunt veniam minima suscipit, dolorum omnis! Facilis similique sint, magni laboriosam culpa animi?</span>
            </div>
          </div>

          <div className="uye">
            <div className="left">
              <div className="fotograf">Ahmet Utku Foto</div>
            </div>
            <div className="right">
              <h1 className="text-2xl">Yapay Zeka Geliştirici</h1>
              <h2 className="text-xl mb-2">Ahmet Utku Karagülle</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat culpa, ad maiores excepturi doloribus, impedit quo nesciunt veniam minima suscipit, dolorum omnis! Facilis similique sint, magni laboriosam culpa animi?</span>

            </div>
          </div>

          <div className="uye">
            <div className="left">
              <div className="fotograf">Faik foto</div>
            </div>
            <div className="right">
              <h1 className="text-2xl">Veri Tabanı Sorumlusu</h1>
              <h2 className="text-xl mb-2">Faik Arda Güler</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat culpa, ad maiores excepturi doloribus, impedit quo nesciunt veniam minima suscipit, dolorum omnis! Facilis similique sint, magni laboriosam culpa animi?</span>

            </div>
          </div>

          <div className="uye">
            <div className="left">
              <div className="fotograf">emir foto</div>
            </div>
            <div className="right">
              <h1 className="text-2xl">Backend Geliştirici</h1>
              <h2 className="text-xl mb-2">Emir Can Bacanak</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat culpa, ad maiores excepturi doloribus, impedit quo nesciunt veniam minima suscipit, dolorum omnis! Facilis similique sint, magni laboriosam culpa animi?</span>

            </div>
          </div>
        </div>
      
    </>
  );
};

export default Teams;
