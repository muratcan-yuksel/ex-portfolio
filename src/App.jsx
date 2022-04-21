import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import ParallaxOne from "./components/parallaxOne/ParallaxOne";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <ParallaxOne />
      <About />
    </div>
  );
};

export default App;
