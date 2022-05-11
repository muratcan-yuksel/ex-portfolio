import React from "react";
import "./stack.css";

const Stack = () => {
  return (
    <div className="techStackContainer">
      <h2 className="title">My Tech Stack</h2>
      <div className="glass techStack d-flex  flex-wrap ">
        <div className="stack">HTML/CSS/Javacript</div>
        <div className="stack">ReactJs</div>
        <div className="stack">VueJS</div>
        <div className="stack">Sodidity</div>
        <div className="stack">Hardhat/EthersJs</div>
        <div className="stack">SASS</div>
        <div className="stack">Bootstrap</div>
        <div className="stack">Google Firebase/Cloud Firestore</div>
        <div className="stack">MongoDB</div>
        <div className="stack">ChartJS/Apexcharts</div>
        <div className="stack">Webpack</div>
        <div className="stack">Git</div>
      </div>
    </div>
  );
};

export default Stack;
