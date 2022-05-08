import { React } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutComponent">
      <div className="texts d-flex flex-column justify-content-center align-items-center flex-md-row  justify-content-md-between">
        <div className="aboutMe">
          <h2 className="title">About Me</h2>
          <div className="glass">
            <div className=" bigPara">
              Hey! My name is Murat Can Yüksel. I build things for the web.
            </div>
            <p className="para">
              Since a while, I've been working remotely as a full time front-end
              developer (VueJS), although my presonal preference goes with
              ReactJs
            </p>
            <p className="para">
              I'm a self-taught programmer, my BA is in Comp. Lit. (I studied it
              partly in Turkey and Budapest/Hungary).
            </p>
            <p className="para">
              I did my MA in Semiotics in Tartu/Estonia and Bordeaux/France.{" "}
            </p>
            <p className="para">I'm fluent in English, French, and Turkish.</p>
            <p className="para">
              As a lifelong learner, these days I'm interested heavily with the
              web3 space.
            </p>
          </div>
        </div>
        <div className="techStack">
          <h2 className="title">My Tech Stack</h2>
          <div className="glass">
            <ul>
              <li className="stack">HTML/CSS/Javacript</li>
              <li className="stack">ReactJs</li>
              <li className="stack">VueJS</li>
              <li className="stack">Solidity</li>
              <li className="stack">Hardhat/EthersJs</li>
              <li className="stack">SASS</li>
              <li className="stack">Bootstrap</li>
              <li className="stack">Google Firebase/Cloud Firestore</li>
              <li className="stack">MongoDB</li>
              <li className="stack">ChartJS/Apexcharts</li>
              <li className="stack">Webpack</li>
              <li className="stack">Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
