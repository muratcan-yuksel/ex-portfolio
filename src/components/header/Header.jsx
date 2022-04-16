import React from "react";
import "./header.css";
import { BsTriangle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="whiteBox d-flex flex-column justify-content-center align-items-center">
        <div className="name text-center">Murat Can Yüksel</div>
        <div className="occupation text-center">
          Web <span className="three">3</span> developer{" "}
        </div>
        <div className="animatedLine"></div>
        <div className="stack">ReactJS Solidity</div>

        {/* <BsTriangle className="tri" /> */}
        <div id="wrapper">
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>{" "}
          <div className="innerwrapper ">
            <div className="move"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
