import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
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
    <ToTopButton onClick={toTop} show={scrollState}>
      <AiOutlineArrowUp />
    </ToTopButton>
  );
};

const ToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: ${({ show }) => (show ? "block" : "none")};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
export default ScrollToTop;
