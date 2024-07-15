import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import EnglishLyrics from "./pages/EnglishLyrics/EnglishLyrics";
import NepaliLyrics from "./pages/NepaliLyrics/NepaliLyrics";
import HindiLyrics from "./pages/HindiLyrics/HindiLyrics";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nepali-lyrics" element={<NepaliLyrics />} />
        <Route path="/english-lyrics" element={<EnglishLyrics />} />
        <Route path="/hindi-lyrics" element={<HindiLyrics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
