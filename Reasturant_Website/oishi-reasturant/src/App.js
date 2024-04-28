import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
