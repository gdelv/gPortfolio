import React from "react";
import CarouselPage from "./CarouselPage";
import About from "./About";

const Container = () => {
  return (
     <div className="carousel-container" id='carousel'>
        <CarouselPage />
          <About/>
      </div>
  );
};

export default Container;
