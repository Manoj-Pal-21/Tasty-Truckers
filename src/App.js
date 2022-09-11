import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home";
import About from "./Component/About";
import OurService from "./Component/OurService";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurService" element={<OurService />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;