import Under from "./components/under/Under";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Share from "./pages/Share/Share";
import AnaSayfa from "./pages/MainPage/AnaSayfa";
import Teams from "./pages/Team/Teams";
import Model from "./pages/AI-Models/Model";
import Favourite from "./pages/Favourite/Favourite";
import Login from "./pages/Login/Login";
import Header from "./components/header/Header";
import Error from "./pages/Error/Error";
import { useEffect, useState } from "react";
import axios from "axios"
import AKBNK from "./pages/Tablolar/AKBNK";
import ALARK from "./pages/Tablolar/ALARK";
import BIMAS from "./pages/Tablolar/BIMAS";
import ASELS from "./pages/Tablolar/ASELS";
import ASTOR from "./pages/Tablolar/ASTOR";
import ARCLK from "./pages/Tablolar/ARCLK";

function App() {
  
  const [hisseler,setHisseler] = useState([])

  

  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/ann")
    .then(response => setHisseler(response.data))
    .catch(error => console.log({error}))
  },[])

  const isLoginPage = window.location.pathname === "/login";
  return (
    <div className="h-screen relative">
      
      {isLoginPage ? null : <Header />}

      <Router>
        <Routes>
          <Route path="/home" element={<AnaSayfa />} />
          <Route path="/share" element={<Share />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/ai-models" element={<Model />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favourite-list" element={<Favourite />} />
          <Route path="/share/AKBNK" element={<AKBNK />} />
          <Route path="/share/ALARK" element={<ALARK />} />
          <Route path="/share/ARCLK" element={<ARCLK />} />
          <Route path="/share/ASELS" element={<ASELS />} />
          <Route path="/share/ASTOR" element={<ASTOR />} />
          <Route path="/share/BIMAS" element={<BIMAS />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      {isLoginPage ? null : <Under />}
    </div>
  );
}

export default App;


// hisseler.forEach(nesne => {
//   console.log("Hisse Adı:", nesne.hisseAd);
// });