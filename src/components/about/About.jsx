import { React, useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="aboutComponent">
      <div className="texts d-flex flex-column flex-md-row ">
        <div className="aboutMe">
          <h2 className="title">About Me</h2>
        </div>
        <div className="techStack">
          <h2 className="title">My Tech Stack</h2>
        </div>
      </div>
      {/* <div className="glass"></div> */}
      <div className="block glow"></div>
    </div>
  );
};

export default About;
