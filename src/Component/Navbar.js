import React from "react";
import { useState } from "react";
import "../Styles/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="left-side-b">
          <div className="left-side">
            <img src="images/truck1.png" alt="logo" className="logo" />
          </div>
          <div className="b">
            <i
              className="fal fa-bars"
              onClick={() => setShowLinks(!showLinks)}
            ></i>
          </div>
          <div className="links" id={!showLinks ? "hidden" : ""}>

            <Link to="/" className="a" onClick={() => setShowLinks(!showLinks)}>
              Home
            </Link>
            <Link
              to="/About"
              className="a"
              onClick={() => setShowLinks(!showLinks)}
            >
              About us
            </Link>
            <Link
              to="/OurService"
              className="a"
              onClick={() => setShowLinks(!showLinks)}
            >
              Our services
            </Link>
            <Link
              to="/Contact"
              className="a"
              onClick={() => setShowLinks(!showLinks)}
            >
              Contact us
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
