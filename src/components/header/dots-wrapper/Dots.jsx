import React from "react";
import Dot from "./dots/Dot";

const Dots = () => {
  const arr = ["one", "two", "three", "four", "five"];
  return (
    <div id="wrapper">
      {arr.map((item, index) => {
        return <Dot array={arr} className={item + "Sec"} />;
      })}
    </div>
  );
};

export default Dots;
