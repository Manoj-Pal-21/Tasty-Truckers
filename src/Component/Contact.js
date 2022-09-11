import React from "react";
import "../Styles/style.css";


const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <div className="slider">
      <img
        src="images/p2.jpg"
        alt="img"
        id="sub-item"
      />

      <div className="contact-c">
        <div className="card-c">
          <div className="card" style={{  height: "100%" }}>
            <img src="https://img.icons8.com/ios-filled/50/22C3E6/man-on-phone.png" alt="img" className="c-logo" />
            <div className="card-body" id="c-b">
              <h5 className="card-title">
                Reach out to us by giving us a call
              </h5>
              <p>+91 7875438719</p>
              <a href="tel:+91 7875438719" className="btn btn-primary"> Give Us A Call</a>
            </div>
          </div>
        </div>
        <div className="card-c">
          <div className="card" style={{height: "100%" }}>
            <img src="https://img.icons8.com/external-phatplus-solid-phatplus/64/22C3E6/external-map-logistics-phatplus-solid-phatplus.png" alt="img" className="c-logo" />
            <div className="card-body" id="c-b">
              <h5 className="card-title">We are on the Map</h5>
              <p>  Tasty Truckers ,May Flower Gardens Marigold, Kansai, Ambernath,
                Maharashtra 421501</p>
              <a href="https://goo.gl/maps/PZ5hDFJ3aZgrFVhr9" className="btn btn-primary">Navigate Us</a>
            </div>
          </div>
        </div>
        <div className="card-c">
          <div className="card" style={{ height: "100%" }}>
            <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/22C3E6/external-Email-email-bearicons-glyph-bearicons.png" alt="img" className="c-logo" />
            <div className="card-body" id="c-b">
              <h5 className="card-title">Send Us A Message​​</h5>
              <p>tastytruckers@gmail.com</p>
              <a href="mailto:tastytruckers@gmail.com" className="btn btn-primary">DM Us</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
