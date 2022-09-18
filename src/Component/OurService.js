import React from "react";

const OurService = () => {
  window.scrollTo(0, 0);
  return (
    <div className="slider">
      <img src="images/p1.jpg" alt="img" id="sub-item" />
      <div className="t-container">
        <div className="img-text-c">
          <div>
            <span className="H-Text">
              <strong className="H-T">
                | Our Speciality in our Food Truck - TastyTruckers
              </strong>
            </span>

            <p className="para">
              • Food Truck with kitchen in the basement & seating at roof top.
            </p>

            <p>
              • We have a unique folding ladder which opens & gets folded into
              small portion.
            </p>
            <p>
              • We have a unique folding railing & rooftop that gets folded too.
            </p>
            <p>
              • Vehicle can run on road as normal food truck without any
              hurdles.
            </p>
            <p>
              • Once the place is fixed,one can open the ladder & railing in
              rooftop.
            </p>
            <p>
              • All the activity can be done by Female / male since its too easy
              to assemble the vehicle.{" "}
            </p>
          </div>
          <div>
            <img src="images/blueprint.png" alt="img" className="bp" />
          </div>
        </div>

        <span className="H-Text">
          <strong className="H-T">| Opening Process</strong>
        </span>
        <p>• Age of applicant should be between 18 to 60 years</p>
        <p>
          • In order to give correct proof of age, the applicant shall have to
          provide photocopy of Aadhar-Card.
        </p>
        <p>
          • If someone wants to open Food Truck of our Tasty-truckers, They must
          have :
          <ul>
            <li>
              <b>Chhota Hathi</b> or any truck bigger than Chhota Hathi
            </li>
            <li>Smaller vehicle than Chhota Hathi are not eligible.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default OurService;

