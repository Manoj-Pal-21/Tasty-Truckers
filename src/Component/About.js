import React from "react";
import "../Styles/style.css";

const About = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="slider">
        <img src="images/p.jpg" alt="img" id="sub-item" />
        <div className="t-container">
          <span className="H-Text">
            <strong className="H-T">| About us</strong>
          </span>

          <p className="para">
            Our journey began with one humble foodtruck With Rooftop seating
            which attracted lot of customers with our unique concept.
          </p>

          <span className="H-Text">
            <strong className="H-T">| Location Of tasty Truckers :</strong>
          </span>

          <p>
            Beside May Flower gardens,Shiv Mandir Road,near old Bus Stop
            ,Ambernath, 421501.
          </p>
          <span className="H-Text">
            <strong className="H-T">| Our Mission , Values & Vision :</strong>
          </span>

          <p>
            Creating exceptional Pizzas, Burgers, Frankie, fries, Mojitos are
            our way of life, and our customers & parteners are the focus of
            everything we do. Our unwavering commitment to the both our
            customers and partners are the key to our success in future. We are
            dedicated to creating a dynamic environment, conducting ourselves
            with the highest integrity for every component in our value chain,we
            are able to ensure our company's sweet success.
          </p>

          <span className="H-Text">
            <strong className="H-T">| Our passion :</strong>
          </span>
          <p>
            Our products are not just our business,they are our passion. Our
            pizzas, burgers, fries, frankie, garlic bread & sandwich are
            prepared with the same love, care ,and affection that would go into
            preparing for our own friends & family To us, the Pizzas & all other
            items that go out into the market are not merely our product line,
            but are our way to bring something we love into our customer's home.
          </p>
          <span className="H-Text">
            <strong className="H-T">| Our core values are :</strong>
          </span>
          <p>
            • All our products and services shall be offered with same love
            ,core, & affection as if ,they were meant for the most beloved
            person.
          </p>
          <p>
            • Being fair to all our customers,& business party & employees. For
            we believe good intentions yield good products & services is to make
            Tasty-Truckers Living proof that hard-work, integrity, innovation
            and continued support can lead to all levels of success.
          </p>
          <p>
            • Our core purpose is to help people express their happiness in a
            memorable way.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
