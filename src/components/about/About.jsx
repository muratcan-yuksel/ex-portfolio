import { React } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutComponent">
      <div className="texts d-flex flex-column justify-content-center align-items-center flex-md-row  justify-content-md-between">
        <div className="aboutMe">
          <h2 className="title">
            {" "}
            const aboutMe= &#123; <br /> currentPosition: "Front-end developer",{" "}
            <br />
            cupiditate atque! <br />
            &#125;
          </h2>
        </div>
        <div className="techStack">
          <h2 className="title">My Tech Stack</h2>
        </div>
      </div>
      {/* <div className="glass"></div> */}
    </div>
  );
};

export default About;
