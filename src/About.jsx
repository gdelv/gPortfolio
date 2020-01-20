import React from "react";
import Languages from "./Languages";
import Projects from "./Projects";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className='about-container'>
          <h5>A bit ABOUT ME</h5>
          {/* insert typewriter effect here for different nicknames */}
          {/* <h4>Who is Giusseppe Del Vecchio?</h4> */}
          <p>
            I am hardworking charismatic individual who embraces challenges and
            enjoys overcoming them to achieve greater success. I believe that my
            character has helped me throughout the years overcome obstacles, but
            in the long run no one can do anything by themselves, which is why I
            enjoy coming together as a group and collaborating to find the
            optimal design.
          </p>
        </div>

        <Languages />
        <Projects />
      </div>
    </>
  );
};

export default About;
