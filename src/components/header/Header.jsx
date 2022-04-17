import React from "react";
import "./header.css";
import { BsTriangle } from "react-icons/bs";
import Dots from "./dots-wrapper/Dots";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="whiteBox d-flex flex-column justify-content-start align-items-start">
        <div className="name text-center">Murat Can Yüksel</div>
        <div className="occupation text-center">
          Web <span className="three">3</span> developer{" "}
        </div>
        <div className="animatedLine"></div>
        <div className="stack">ReactJS Solidity</div>
        {/* <BsTriangle className="tri" /> */}
        {/* <Dots /> */}{" "}
        {/* <img
          src="https://assets.codepen.io/2621168/abstract.jpg"
          alt="abstract background"
        ></img> */}
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Header;
