import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import "../footer/footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div className="socio-icons">
          <BsFacebook />
          <BsInstagram />
          <BsYoutube />
        </div>
        <div className="footer-contact-details">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="bx bx-current-location"></i>
            </div>
            <div className="contact-details">kathmandu kamalpokhara</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="bx bx-phone"></i>
            </div>
            <div className="contact-details">+977 9861617100</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="bx bxl-gmail"></i>
            </div>
            <div className="contact-details">adhikarisaroj291@gmail.com</div>
          </div>
        </div>
        <div className="news-letter">
          <h2>News letter signup</h2>
          <form>
            <input type="text" placeholder="Email" />
            <button>Signup</button>
          </form>
        </div>
        <div className="copy-right-section">
          &copy; {new Date().getFullYear()} Mr lyrics. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
