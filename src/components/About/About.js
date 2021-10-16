import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
       <h2>Weather App Demonstration</h2>
      <ul className="pages">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none',color: 'black' }}>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default About;
