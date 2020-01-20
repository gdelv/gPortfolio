import React from "react";
import CarouselPage from "./CarouselPage";
import About from "./About";
import Footer from "./Footer";

const Container = () => {
  return (
     <div className="carousel-container" id='carousel'>
        <CarouselPage />
          <About/>
          <Footer/>
      </div>
  );
};

export default Container;
