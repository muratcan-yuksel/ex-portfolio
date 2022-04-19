import React from "react";
import "./header.css";
import { SiDevdotto, FaLinkedin, FaGithub } from "react-icons/all";
import Dots from "./dots-wrapper/Dots";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="whiteBox d-flex flex-column  align-items-start justify-content-center justify-content-lg-start align-items-lg-start">
        <div className="greeting">Hi, my name is</div>
        <div className="name text-center">Murat Can Yüksel</div>
        <div className="greeting">I'm a</div>
        <div className="occupation text-center">
          Web <span className="three">3</span> developer{" "}
        </div>
        <div className="intro">
          During the day I develop web applications with VueJs. During the night
          I code with ReactJs and Solidity. <br />
          You can find me on GitHub and LinkedIn by clicking the relevant icons
          below. <br />
          If you click the DEV icon, it will take you to my dev.to profile,
          where you can check the tutorials I've written.
        </div>
        <div className="logos ">
          <a
            className="logo"
            href="https://github.com/muratcan-yuksel "
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="logo"
            href="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
            target="_blank"
          >
            <FaLinkedin />
          </a>{" "}
          <a
            className="logo"
            href="https://dev.to/muratcanyuksel"
            target="_blank"
          >
            <SiDevdotto />
          </a>{" "}
        </div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Header;
