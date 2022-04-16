import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="whiteBox d-flex flex-column justify-content-center align-items-center">
        <span className="name text-center">Murat Can Yüksel</span>
        <div className="occupation text-center">
          Web <span className="three">3</span> developer{" "}
        </div>
        <div className="stack">ReactJS Solidity</div>
        <div className="triangle">
          <div className="line1"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
