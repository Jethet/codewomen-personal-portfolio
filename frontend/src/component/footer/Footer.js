import React from "react";
import "./footer.css";

import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrWordpress } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://raw.githubusercontent.com/Jethet/codewomen-personal-portfolio/develop/migracode-logo.jpg"
              width="150"
            />
          </div>
          <div className="col">
            <h2>About Us</h2>
            
              <li>Our Program aims to support and </li>
              <li>encourage female students to</li>
              <li>successfully graduate Migracode</li>
              <li>as a junior developers.</li>
            
          </div>
          <div className="col">
            <h2>Services</h2>
            
              <li> Monthly Workshop</li>
              <li>Helping each other</li>
            
          </div>
          <div className="col">
            <h2>Contact Us</h2>
           
              <li>+3461616161</li>
              <li>email@gmail.com</li>
           
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logo-list">
        <li>
          <a href="https://www.linkedin.com/school/migracode-barcelona/">
            <GrLinkedin />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/migracodebarcelona?igshid=1wnvw1xkxg1ba">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="https://syllabus.migracode.org/additional-support/codewomen">
            <GrWordpress />
          </a>
        </li>
        </div>
        <hr />
        <div>
      <p className="copy">

        &copy;{new Date().getFullYear()}.MIGRACODE BARCELONA | All rights
        reserved | Privacy.
      </p>
      </div>
      </div>
      
    </div>
  );
};
export default Footer;
