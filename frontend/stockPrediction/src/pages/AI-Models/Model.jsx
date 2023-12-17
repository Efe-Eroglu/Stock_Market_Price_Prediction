import { useEffect, useState } from "react";
import "./model.css";

const Model = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider_content = [
    {
      img_path: "/aiModelsImages/ann.png",
      title: "Artificial Neutral Network",
      text1:
        "Yapay Zeka Ann modelleri, nöron adı verilen basit birimlerden oluşur. Bu nöronlar, birbirleriyle bağlantılıdır ve bu bağlantılar üzerinden bilgi taşınır. Yapay Sinir Ağları, giriş verilerini alır, bu veriler üzerinde bir dizi matematiksel işlem yapar, ardından çıkış verisini üretir. Model, bu çıkışı öğrenme sürecindeki gerçek sonuçlarla karşılaştırarak kendini iyileştirir.",
      text2:
        "Yapay Sinir Ağları, çeşitli uygulama alanlarında kullanılabilir, örneğin: Görüntü Tanıma: Nesne tanıma, yüz tanıma gibi görsel veriler üzerinde çalışabilirler. Doğal Dil İşleme: Metin tabanlı verileri anlamlandırma, dil çevirisi, metin sınıflandırma gibi görevlerde kullanılabilirler. ",
    },
    {
      img_path: "/aiModelsImages/dtree.png",
      title: "Decision Tree",
      text1:
        "Karar ağacı, belirli bir soruna yönelik tüm potansiyel çözümleri haritalandıran akış şeması benzeri bir diyagramdır. Genellikle kuruluşlar tarafından, bir dizi karar almanın tüm olası sonuçlarını karşılaştırarak en uygun hareket tarzını belirlemeye yardımcı olmak için kullanılır.  ",
      text2:
        "Karar ağaçlarının bir diğer büyük avantajı da çok yönlü olmalarıdır. Bu, örüntü tanıma, tahmin ve sınıflandırma dahil ancak bunlarla sınırlı olmamak üzere çeşitli farklı görevler için kullanılabilecekleri anlamına gelir.",
    },
    {
      img_path: "/aiModelsImages/randomforest.png",
      title: "Random Forest",
      text1:
        "Rassal orman (Random Forest), hiper parametre kestirimi yapılmadan da iyi sonuçlar vermesi hem regresyon hem de sınıflandırma problemlerine uygulanabilir olmasından dolayı popüler makine öğrenmesi modellerinden biri. Rassal ormanı anlamak için önce bu modelin temel blogu olan karar ağaçlarını anlamak gerekiyor. 3. dersi bu konuya ayırmıştık başarılı bir karar ağacı günlük hayatta bilgi kazancını arttıracak sorular soran ve isabetli tahminler yapan insanlara benzetilebilir.",
      text2:
        "Rassal orman modelinde farklı veri setleri üzerinde eğitim gerçekleştiği için varyans, diğer bir deyişle karar ağaçlarının en büyük problemlerinden olan overfitting azalır. Ayrıca bootstrap yöntemiyle oluşturduğumuz alt-veri kümelerinde outlier bulunma şansını da düşürmüş oluruz.",
    },
  ];

  const changeSlide = (index) =>{
    setCurrentIndex(index);
  }

  
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
          {slider_content.map((slide, index) => (
            <li
              key={index}
              data-slide-to={index}
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
