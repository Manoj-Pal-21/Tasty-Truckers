import React from "react";

const OurService = () => {
  
  window.scrollTo(0,0);
  return (
    <div className="slider">
      <img
        src="images/p1.jpg"
        alt="img"
        id="sub-item"
      />
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
          best of Pizzas & burger ! Leverage our experience, availability of
          goods, quality controls and factories near you to build a legacy for
          you &your family by becoming a part of ours.
        </p>

        <p>• Leverage your business with the credibility of the Brand.</p>
        <p>• Low entry risk-Tried & tested business model.</p>
        <p>• Assured & consisted ROI in your Business.</p>
      </div>
    </div>
  );
};

export default OurService;
