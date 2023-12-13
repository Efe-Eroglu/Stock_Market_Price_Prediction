import { useState } from "react";
import "./login.css";

const Login = () => {   
       
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title mb-6">Giriş Yap</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Kullanıcı Adı" />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Parola" />
              </div>
              <input
                type="submit"
                value="Giriş Yap"
                className="btn solid bg-blue-900 mt-3"
              
              />
              <p className="sub-text mt-5">
                Daha önceden bir hesap oluştuduysan bilgilerini girerek sitemizi
                kullanmaya devam edebilirsin.
              </p>
            </form>
            <form className="sign-up-form">
              <h2 className="title">Kayıt Ol</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Kullanıcı Adı" />
              </div>
              <div className="input-field">
                <i className="bx bxs-envelope"></i>
                <input type="text" placeholder="E-Mail" />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Parola" />
              </div>
              <input type="submit" value="Kayıt Ol" className="btn solid" />
              <p className="social-text">
                Sosyal medya hesaplarını kullanarak kayıt ol
              </p>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Kayıtlı Değil misin?</h3>
              <p>
                Sende aramıza katılmak istermisin. Kolay bir şekilde aramıza
                katılıp hisseleri inceleyebilmek için hemen kayıt ol.
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Kayıt Ol
              </button>
            </div>
            <img src='/loginImages/hero.png' className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Hesabın Var mı?</h3>
              <p>
                Eğer daha önceden kayıt olup aramıza katıldıysan hemen giriş
                yapıp hesabına ulaşabilirsin.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Giriş Yap
              </button>
            </div>
            <img src='/loginImages/giris_panel.png' className="image" alt="" />
          </div>
        </div>
      </div> 

    </>
  );
};

export default Login;
