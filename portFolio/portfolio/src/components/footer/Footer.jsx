import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saroj</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" rel="noreferrer" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" className="footer__link"></a>
          </li>
          <li>
            <a href="#portfolio" rel="noreferrer" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" rel="noreferrer" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/beingsaroj.adk/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/adk_saroz/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/adhikarisaroj795"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; {new Date().getFullYear()} sarojAdhikari. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
