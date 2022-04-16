import React from "react";

const Dots = () => {
  return (
    <div id="wrapper">
      <div className="innerwrapper ">
        <div className={"move"}></div>
      </div>{" "}
      <div className="innerwrapper ">
        <div className={"move twoSec"}></div>
      </div>{" "}
      <div className="innerwrapper ">
        <div className={"move threeSec"}></div>
      </div>{" "}
      <div className="innerwrapper ">
        <div className={"move fourSec"}></div>
      </div>{" "}
      <div className="innerwrapper ">
        <div className={"move fiveSec"}></div>
      </div>
    </div>
  );
};

export default Dots;
