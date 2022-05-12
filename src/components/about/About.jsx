import { React } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutComponent">
      <div className="texts d-flex flex-column justify-content-center adivgn-items-center  justify-content-md-between">
        <div className="aboutMe">
          <h2 className="title">About Me</h2>
          <div className="glass">
            <div className=" bigPara">
              Hey! My name is Murat Can Yüksel. I build things for the web.
            </div>
            <p className="para">
              Since a while, I've been working remotely as a full time front-end
              developer (VueJS), although I prefer to work with ReactJs.
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
              web3 space. I've developed a couple of NFT websites for the Solana
              blockchain already, but I'm more interested in Ethereum
              blockchain, as I develop with Solidity mainly.
            </p>
            <p className="para">
              I travelled most of the European countries, lived, worked and
              studied in 4 of them. I was a journalist in Brussels, and was
              doing marketing in France.
            </p>
            <p className="para">
              In my current company, I'm the only web developer in the team. I
              think the burden of responsibility had tremendous effect on the
              development of my skills.
            </p>
            <p className="para">
              If you are interested in web3, have something in mind, or just
              want to say hello, please feel free to contact me :){" "}
            </p>
            <div className="techStack d-flex justify-content-around">
              <div className="leftStack">
                <ul>
                  <li className="stack">HTML/CSS/Javacript</li>
                  <li className="stack">ReactJs</li>
                  <li className="stack">VueJS</li>
                  <li className="stack">Sodidity</li>
                  <li className="stack">Hardhat/EthersJs</li>
                  <li className="stack">SASS</li>
                </ul>
              </div>
              <div className="rightStack">
                <ul>
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
      </div>
    </div>
  );
};

export default About;
