import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai'
const Nav = () => {
  return (
    <div className="nav-container">

      <div className="profile-pic-container">
        <img src="https://media.licdn.com/dms/image/C4E03AQH70rtO8aVBtQ/profile-displayphoto-shrink_800_800/0?e=1582761600&v=beta&t=G88XeQekYaAIjfxNd2K_6SYBeqwa84zk534p2X3Zf14" />
      </div>

      <h1>
        Giusseppe <br></br>
        Del Vecchio
      </h1>

      <h6>
          <AiOutlineMail style={{paddingRight:'1em'}}/>giudelvecchio@gmail.com
    </h6>

      <div className='links-container'>
        <a href="#"> Intro</a>
        <a href="#"> About</a>
        <a href="#"> Timeline</a>
      </div>

      <div className='socialmedia-links-container'>
        <a href="https://www.linkedin.com/in/giusseppe-del-vecchio/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/gdelvec/">
          <FaInstagram />
        </a>
        <a href="https://github.com/gdelv">
          <FaGithub />
        </a>
      </div>
      <p className='footer'>Made with &hearts;</p>
    </div>
  );
};

export default Nav;
