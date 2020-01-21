import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
const Render = require('react-emoji-render')
const Emoji = Render.Twemoji

const machupicchu = require('./images/machupicchu.jpg')
const codingPic = require('./images/coding.jpg')

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={2} 
      interval={false}
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
          <MDBCarouselCaption className='first-caption' id='first-caption'>
            <h3 className="h3-responsive">{React.createElement(Emoji, {
              text: "Hello there! :waving_hand:"
            })}</h3>
            <p>Check out my CV!</p>
            <form action = "https://www.docdroid.net/D37HPv2/giusseppe-resume.pdf" target='_blank'>
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
          <MDBCarouselCaption className='second-caption'>
            <h3>I enjoy creating new projects</h3>
            {/* <p>"The best project you'll ever work on is you"</p> */}
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