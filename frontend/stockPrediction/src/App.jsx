import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Share from "./pages/Share/Share";
import AnaSayfa from "./pages/AnaSayfa/AnaSayfa";
import AboutUs from "./pages/AboutUs/AboutUs";
import Teams from "./pages/Team/Teams";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<AnaSayfa/>} />
            <Route path="/share" element={<Share/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/team" element={<Teams/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
