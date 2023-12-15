import Under from "./components/under/Under";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Share from "./pages/Share/Share";
import AnaSayfa from "./pages/AnaSayfa/AnaSayfa";
import AboutUs from "./pages/AboutUs/AboutUs";
import Teams from "./pages/Team/Teams";
import Login from "./pages/Login/Login";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="h-screen relative"> {/*h-screen relative h-fit*/}    
      <Header/>
      <Router> 
          <Routes>
            <Route path="/" element={<AnaSayfa/>} />
            <Route path="/share" element={<Share/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/team" element={<Teams/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
      <Under/>
    </div>
  );
}

export default App;
