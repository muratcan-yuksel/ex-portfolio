import { React, useEffect } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import ParallaxOne from "./components/parallaxOne/ParallaxOne";
import "./App.css";
const App = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = "black";
    document.body.style.overflowX = "hidden";
  }, []);
  return (
    <div className="App">
      <Header />
      <ParallaxOne />
      <About />
    </div>
  );
};

export default App;
