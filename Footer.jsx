
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>✦ TRAVEL<span>GO.</span></h2>
          <p>
            Discover beautiful places, explore new cultures
            and create memories around the world.
          </p>
          <Link to="/about">Discover Our Story →</Link>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h4>TRAVEL</h4>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/deals">Special Deals</Link>
          <Link to="/collections">Collections</Link>
        </div>

        <div className="footer-column">
          <h4>GET IN TOUCH</h4>
          <p>hello@travelgo.com</p>
          <p>+91 98765 43210</p>
          <p>India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All rights reserved.</p>
        <p>Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;
