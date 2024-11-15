import React from "react";
import Slider from "react-slick";
import Intro from "../components/UI/Intro/Intro";
import Services from "../components/UI/Services/Services";
import Team from "../components/UI/Team/Team";
import Client from "../components/UI/Client/Client";
import Media from "../components/UI/Media/Media";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Services />
      <Team />
      <Client />
      <Media/>
    </div>
  );
};

export default Home;
