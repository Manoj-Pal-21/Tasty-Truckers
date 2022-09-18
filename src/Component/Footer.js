import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Tasty<span>Truckers</span>
          </h3>

          <p className="footer-links">
            <Link to="/" className="a">
              Home
            </Link>
            |
            <Link to="/About" className="a">
              Aboutus
            </Link>
            |
            <Link to="/Ourservice" className="a">
              OurServices
            </Link>
            |
            <Link to="/Contact" className="a">
              ContactUs
            </Link>
          </p>

          <p className="footer-company-name">
            Copyright © 2022 <strong>TASTY TRUCKERS</strong> | All Rights
            Reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/marker--v1.png"
              className="c"
              alt=""
            />
            <p>
              <a href="https://goo.gl/maps/PZ5hDFJ3aZgrFVhr9">
               Tasty Truckers,Beside May Flower gardens,Shiv Mandir Road,near old Bus Stop,Ambernath, 421501.
              </a>
            </p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
              className="c"
              alt=""
            />
            <p>
              <a href="tel:+91 7875438719">+91 7875438719</a>
            </p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-message.png"
              className="c"
              alt=""
            />
            <p>
              <a href="mailto:tastytruckers@gmail.com">
                tastytruckers@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            We Believe that
            <strong> TASTY TRUCKERS </strong> is about Being fair to all our
            customers,& business party & employees. For we believe good
            intentions yield good products & services is to make Tasty -
            Truckers Living proof that hard-work, integrity, innovation and
            continued support can lead to all levels of success
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/" className="a">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/tasty_truckers/" className="a">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" className="a">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/" className="a">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
