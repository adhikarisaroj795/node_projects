import React, { useEffect, useState } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className={`scrollup ${scrollState ? "show-scroll" : ""}`}
      onClick={toTop}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </section>
  );
};

export default ScrollUp;
