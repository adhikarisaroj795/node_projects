import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footermain">
        <div className="footeritem">
          <h2>Follow On</h2>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
        <div className="footeritem">
          <h2>Quick Links</h2>
          <p>Disclaimer</p>
          <p>Term and Condition</p>
          <p>Privacy and Policy</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="footeritem">
          <h2>Our Services</h2>
          <p>English</p>
          <p>Hindi</p>
          <p>Nepali</p>
        </div>
      </div>
      <p>{`Copyright©${new Date().getFullYear()} mrlyrics. All rights reserved`}</p>
    </footer>
  );
};
export default Footer;
