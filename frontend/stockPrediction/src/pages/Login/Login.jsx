import { useState } from "react";
import "./login.css";
import {message} from "antd";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [signState, setSignState] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const navigate = useNavigate()

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api adress", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body:JSON.stringify(formData),
      });

      if (response.ok){
        const data = await response.json();
        localStorage.setItem("user",JSON.stringify(data));
        message.success("Kayıt İşlemi Başarılı")
        navigate("/");
        
      }
      else{
        message.error("Kayıt işlemi başarısız")
      }

    } catch (error) {
      console.log("Giriş hatası:" , error);
    }
  };

  const setSignUp = () => {
    setSignState(false);
  };

  const setSignIn = () => {
    setSignState(true);
  };

  return (
    <div className="login-page-content ">
      <div className={`container ${signState ? "sign-up-mode" : ""}`}>
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
            <form className="sign-up-form" onSubmit={handleRegister}>
              <h2 className="title">Kayıt Ol</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  onChange={HandleInputChange}
                  name="user_name"
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  placeholder="E-Mail"
                  onChange={HandleInputChange}
                  name="user_email"
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Parola"
                  onChange={HandleInputChange}
                  name="user_password"
                />
              </div>
              <input
                type="submit"
                value="Kayıt Ol"
                className="btn solid bg-blue-900 mt-3"
              />
              <p className="social-text mt-2">
                Henüz hesabın yoksa aramıza katılmak için hemen kayıt
                olabilirsin
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
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={setSignIn}
              >
                Kayıt Ol
              </button>
            </div>
            <img src="/loginImages/hero.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Hesabın Var mı?</h3>
              <p>
                Eğer daha önceden kayıt olup aramıza katıldıysan hemen giriş
                yapıp hesabına ulaşabilirsin.
              </p>
              <button className="" id="sign-in-btn" onClick={setSignUp}>
                Giriş Yap
              </button>
            </div>
            <img src="/loginImages/giris_panel.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
