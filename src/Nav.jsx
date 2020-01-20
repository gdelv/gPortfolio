import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai'
const profilePic  = require('./images/Gheadshot.jpeg')
const Nav = () => {
  return (
    <div className="nav-container">

      <div className="profile-pic-container">
        <img src={profilePic} />
      </div>

      <h1>
        Giusseppe <br></br>
        Del Vecchio
      </h1>

      <h6>
          <AiOutlineMail size={50} style={{paddingRight:'.5em'}}/>giudelvecchio@gmail.com
    </h6>

      <div className='links-container'>
        <a href="#carousel"> Intro</a>
        <a href="#about"> About</a>
        <a href="#projects"> Projects</a>
      </div>

      <div className='socialmedia-links-container'>
        <a href="https://www.linkedin.com/in/giusseppe-del-vecchio/" target='_blank'>
          <FaLinkedin size={40} style={{color: '#FCFCD4'}}/>
        </a>
        <a href="https://www.instagram.com/gdelvec/" target='_blank'>
          <FaInstagram size={40} style={{color: '#FCFCD4'}}/>
        </a>
        <a href="https://github.com/gdelv" target='_blank'>
          <FaGithub size={40} style={{color: '#FCFCD4'}}/>
        </a>
      </div>
      <p className='footer'>Made with <span id='heart'>&hearts;</span></p>
    </div>
  );
};

export default Nav;
