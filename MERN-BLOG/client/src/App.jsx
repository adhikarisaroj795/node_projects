import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import FooterComp from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";
import ComSlider from "./components/ComSlider";
import OnlyAdminPrivateRoutes from "./pages/OnlyAdminPrivateRoute";
import CreateAPost from "./pages/CreateAPost";
import UpdatePost from "./pages/UpdatePost";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoutes />}>
          <Route path="/create-post" element={<CreateAPost />} />
          <Route path="/update-post/:postId/" element={<UpdatePost />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/slider" element={<ComSlider />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
