import React from "react";
import CarouselPage from "./CarouselPage";
import About from "./About";

const Container = () => {
  return (
     <div className="carousel-container">
        <CarouselPage />
          <About/>
      </div>
  );
};

export default Container;
