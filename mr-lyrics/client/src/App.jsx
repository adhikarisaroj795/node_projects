import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBarr from "./components/NavBarr";
import Home from "./pages/Home";
import Nepalisongs from "./pages/Nepalisongs";
import Hindisong from "./pages/Hindisong";
import Englishsong from "./pages/Englishsong";
import AdminHome from "./pages/AdminHome";
import AdminNepaliSong from "./pages/AdminNepaliSong";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nepalisongs" element={<Nepalisongs />} />
          <Route path="/hindisongs" element={<Hindisong />} />
          <Route path="/englishsongs" element={<Englishsong />} />
          <Route path="/admin" element={<AdminHome />}>
            <Route path="adminnepalisong" element={<AdminNepaliSong />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
