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
import share_content from "./data/hisse_data";
import Tablolar from "./pages/Tablolar/Tablolar";
import { useEffect, useState } from "react";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  
  return (
    <div className="h-screen relative">
      {/*h-screen relative h-fit*/}

      {isLoginPage ? null : <Header />}

      <Router>
        <Routes>
          <Route path="/home" element={<AnaSayfa />} />
          <Route path="/share" element={<Share />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/ai-models" element={<Model />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favourite-list" element={<Tablolar />} />

          <Route
            path="/share/:id"
            element={<Tablolar />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {isLoginPage ? null : <Under />}
    </div>
  );
}

export default App;
