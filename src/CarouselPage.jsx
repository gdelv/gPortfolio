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
      length={2} 
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
              <button type="submit" className='carousel-buttons'>View CV</button>
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
            <p>"The best project you'll ever work on is you"</p>
            <p>Check out some of my recent projects</p>
            <form action='#projects'>
            <button type='submit' className='carousel-buttons'>View Projects</button>

            </form>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;