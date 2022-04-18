import React from "react";
import "./header.css";
import { SiDevdotto, FaLinkedin, FaGithub } from "react-icons/all";
import Dots from "./dots-wrapper/Dots";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="whiteBox d-flex flex-column  align-items-center justify-content-lg-start align-items-lg-start">
        <div className="greeting">Hi, my name is</div>
        <div className="name text-center">Murat Can Yüksel</div>
        <div className="greeting">I'm a</div>
        <div className="occupation text-center">
          Web <span className="three">3</span> developer{" "}
        </div>
        <div className="intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo
          dolor provident obcaecati asperiores porro doloribus aliquam delectus
          et veritatis molestias odio, optio, voluptatum harum ducimus officia
          quia, sit blanditiis? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Maxime asperiores, sed eius dolorem ducimus quasi
          aperiam fugit nisi perferendis architecto labore quo, vel tempore
          assumenda! Reprehenderit maiores odio magnam nemo.
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
