import { useEffect, useState } from "react";
import "./login.css";
import {message} from "antd";
import {useNavigate} from "react-router-dom"

const Login = () => {

  const [signState, setSignState] = useState(false);

  const [registerFormData, setRegisterFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const navigate = useNavigate()

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api adress", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body:JSON.stringify(registerFormData),
      });

      if (response.ok){
        const data = await response.json();
        const {password, ...rest} = data; 
        localStorage.setItem("user",JSON.stringify(rest));
        message.success("Kayıt İşlemi Başarılı")
        navigate("/home");
        
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

  const handleLogin = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch("login api adress", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body:JSON.stringify(loginFormData),
      });

      if (response.ok){
        const data = await response.json();
        localStorage.setItem("user",JSON.stringify(data));
        message.success("Giriş Başarılı")
        navigate("/home");
        
      }
      else{
        message.error("Giriş başarısız")
      }

    } catch (error) {
      console.log("Giriş hatası:" , error);
    }
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };


  return (
    <div className="login-page-content ">
      <div className={`container ${signState ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
           
           {/* User Login İşlemi*/}
            <form className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title mb-6">Giriş Yap</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input type="email" placeholder="Kullanıcı Email" name="user_email" onChange={handleLoginInputChange}/>
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Parola" name="user_password"/>
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


           {/* User Register İşlemi*/}
            <form className="sign-up-form" onSubmit={handleRegister}>
              <h2 className="title">Kayıt Ol</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  onChange={handleRegisterInputChange}
                  name="user_name"
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  placeholder="E-Mail"
                  onChange={handleRegisterInputChange}
                  name="user_email"
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Parola"
                  onChange={handleRegisterInputChange}
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
            <img src="/loginImages/phone.png" className="image" alt="" />
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
            <img src="/loginImages/right.png" className="image" id="giris-resim" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
