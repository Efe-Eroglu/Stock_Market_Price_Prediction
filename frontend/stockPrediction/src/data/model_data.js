const slider_content = [
    {
      img_path: "/aiModelsImages/ann.png",
      title: "Artificial Neutral Network",
      text1:
        "ANN, veya Yapay Sinir Ağı (Artificial Neural Network), biyolojik sinir sistemlerinden esinlenerek oluşturulan bir yapay zeka modelidir. Temelde, insan beyninin çalışma şeklini taklit eden bu yapay sinir ağları, bilgisayar sistemlerine öğrenme ve problem çözme yetenekleri kazandırmak amacıyla kullanılır.Yapay Sinir Ağları, birbirine bağlı bir dizi yapay sinir hücresinden (nöron) oluşur. Bu nöronlar, bilgiyi işleyerek girdi verilerinden anlam çıkarabilir ve belirli görevlere yönelik çıktı üretebilirler. Yapay Sinir Ağları, öğrenme süreçleri sayesinde deneyimlerden bilgi çıkarabilir ve bu bilgiyi gelecekteki görevlerde kullanabilirler.Öğrenme süreci genellikle ağırlık ayarlaması ve geriye doğru yayılma (backpropagation) gibi teknikleri içerir. Ağırlık ayarlaması, ağın doğru çıktıları üretebilmesi için sinir hücreleri arasındaki bağlantıların güçlendirilmesi veya zayıflatılması anlamına gelir.",
      text2:
        "Yapay Sinir Ağları, çeşitli uygulama alanlarında kullanılabilir, örneğin: Görüntü Tanıma: Nesne tanıma, yüz tanıma gibi görsel veriler üzerinde çalışabilirler. Doğal Dil İşleme: Metin tabanlı verileri anlamlandırma, dil çevirisi, metin sınıflandırma gibi görevlerde kullanılabilirler. ",
    },
    {
      img_path: "/aiModelsImages/dtree.png",
      title: "Decision Tree",
      text1:
        "Decision Tree Regressor (Karar Ağacı Regresyonu), veri kümesindeki ilişkileri anlamak ve sayısal değerler tahmin etmek için kullanılan bir makine öğrenimi modelidir. Temelde, bir veri kümesindeki özelliklere dayanarak verileri bölerek ve kararlar alarak tahminler yapar.Çalışma prensibi, ağacın kökünden başlayarak her bir düğümde bir özellik seçip veriyi bu özelliğe göre bölerek devam etmektir. Bu bölme işlemleri, veri kümesindeki değişkenliği azaltmaya ve her bir bölme sonrasında daha homojen alt gruplar elde etmeye yöneliktir.Decision Tree Regressor, regresyon problemlerini çözmek için kullanılır, yani sayısal değerler tahmin eder. Örneğin, ev fiyatlarını, gelir düzeylerini veya hisse senedi fiyatlarını tahmin etmek gibi uygulamalarda başarılı sonuçlar verir. ",
      text2:
        "Karar ağaçlarının bir diğer büyük avantajı da çok yönlü olmalarıdır. Bu, örüntü tanıma, tahmin ve sınıflandırma dahil ancak bunlarla sınırlı olmamak üzere çeşitli farklı görevler için kullanılabilecekleri anlamına gelir.",
    },
    {
      img_path: "/aiModelsImages/randomforest.png",
      title: "Random Forest",
      text1:
        "Random Forest Regressor, bir makine öğrenimi modelidir ve özellikle regresyon problemlerini çözmek için kullanılır. Bu model, birden fazla karar ağacını bir araya getirerek daha güçlü ve kararlı bir tahmin yapma yeteneği sunar.Random Forest Regressor, rastgele seçilen alt özellik kümesi ve alt veri kümesi üzerinde çok sayıda karar ağacı oluşturur. Bu ağaçlar, veri kümesinin farklı bölümlerini öğrenir. Ardından, her bir ağaç kendi tahminini yapar. Sonuç olarak, bu ağaçların tahminlerinin ortalaması alınarak daha güvenilir ve genel bir tahmin elde edilir.Bu modelin temel avantajları arasında overfittinge karşı dayanıklılık, yüksek performans ve çeşitli veri setlerine uyum sağlama yeteneği bulunmaktadır.",
      text2:
        "Rassal orman modelinde farklı veri setleri üzerinde eğitim gerçekleştiği için varyans, diğer bir deyişle karar ağaçlarının en büyük problemlerinden olan overfitting azalır. Ayrıca bootstrap yöntemiyle oluşturduğumuz alt-veri kümelerinde outlier bulunma şansını da düşürmüş oluruz.",
    },
  ];


  export default slider_content