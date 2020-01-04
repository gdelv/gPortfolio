import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const machupicchu = require('./images/machupicchu.jpg')
const codingPic = require('./images/coding.jpg')

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={2} //change back to 2 when finished CSS for CarouselSlide
      showControls={false}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block"
              src={machupicchu}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Hi I'm Giusseppe</h3>
            <p>Check out my CV!</p>
            <form action = "https://docs.google.com/document/d/1Sfa1oG-s_jS2hRsCWz7vPVLQyNqB38fRRaiAlvXJSqY/edit?usp=sharing" target='_blank'>
              <button type="submit">View CV</button>
            </form>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block"
              src={codingPic}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">I enjoy creating new projects</h3>
            <p>Check out some of my recent projects</p>
            <button>View Projects</button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        {/* <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem> */}
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;