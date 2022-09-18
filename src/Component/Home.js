import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/style.css";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Carousel fade className="slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            id="item"
            src="images/truck2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            id="item"
            src="images/truck3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            id="item"
            src="images/truck4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="t-container">
        <span className="H-Text">
          <strong className="H-T">
            | Become a part of TastyTruckers Family!
          </strong>
        </span>

        <p className="para">
          Want to become your own boss?Provide your community with the best of
          Burgers, pizzas, fries, Sandwich, frankie & many more... TastyTruckers
          can help. Join hands with us & step into the world of business with
          best of Pizzas & burgers ! Leverage our experience, availability of
          goods, quality controls and factories near you to build a legacy for
          you & your family by becoming a part of ours.
        </p>

        <p>• Leverage your business with the credibility of the Brand.</p>
        <p>• Low entry risk-Tried & tested business model.</p>
        <p>• Assured & consisted ROI in your Business.</p>

        <p>
          To become one of our TastyTruckers, Please contact us on
          <a href="tel:+91 8976107771" className="insta-text">
            <strong> +91 8976107771 </strong>
          </a>
          &nbsp;&nbsp;
          <a href="tel:+91 7875438719" className="insta-text">
            <strong> +91 7875438719 </strong>
          </a>
        </p>

        <h2 className="D-M">
          <strong className="H-T"> | </strong>
          DM us on &nbsp;&nbsp;
          <a href="https://www.instagram.com/tasty_truckers/" className="insta-text">
          <img src="https://img.icons8.com/cute-clipart/50/000000/instagram-new.png" alt="img" className="insta-img"/>
            <span className="insta-text"> @tasty_truckers </span>
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Home;
