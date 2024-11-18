import React from "react";
import Slider from "react-slick";
import Intro from "../components/UI/Intro/Intro";
import Services from "../components/UI/Services/Services";
import Team from "../components/UI/Team/Team";
import Client from "../components/UI/Client/Client";
import Media from "../components/UI/Media/Media";
import Say from "../components/UI/Say/Say";
import Faq from "../components/UI/Faq/Faq";
import Consultation from "../components/UI/Consulatation/Consultation";

import "../Styles/home.scss"
const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Services />
      <Team />
      <Client />
      <Media />
      <Say />
      <Faq />
      <Consultation />
    </div>
  );
};

export default Home;
