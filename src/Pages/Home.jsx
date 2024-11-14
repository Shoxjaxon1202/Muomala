import React from "react";
import Slider from "react-slick";
import Intro from "../components/UI/Intro/Intro";
import Services from "../components/UI/Services/Services";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Services />
    </div>
  );
};

export default Home;
