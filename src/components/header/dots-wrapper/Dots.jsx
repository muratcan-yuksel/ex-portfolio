import React from "react";
import Dot from "./dots/Dot";

const Dots = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div id="wrapper">
      {arr.map((item) => {
        return <Dot />;
      })}
    </div>
  );
};

export default Dots;
