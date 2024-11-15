import React, { useRef } from "react";
import Slider from "react-slick";

import "./client.scss";

import rasm1 from "../../../assets/img/Frame 1116606781.png";
import rasm2 from "../../../assets/img/Frame 1116606782.png";
import rasm3 from "../../../assets/img/Frame 1116606783.png";
import rasm4 from "../../../assets/img/Frame 1116606784.png";
import rasm5 from "../../../assets/img/Frame 1116606786.png";

const Client = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const handleMouseEnter = () => {
    sliderRef1.current.slickPause();
    sliderRef2.current.slickPause();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      sliderRef1.current.slickPlay();
      sliderRef2.current.slickPlay();
    }, 100); // 1 soniyadan keyin slayderlar qayta boshlanadi
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div
      className="partners"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="container">
        <div className="partners__container">
          <h1 className="partners__title">Our Partners and Clients</h1>
          <div className="partners__slider">
            <div className="slider-container">
              <Slider ref={sliderRef1} {...settings}>
                <div className="slider__img__wrapper">
                  <img src={rasm1} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm2} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm3} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm4} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm5} alt="" className="slider__img" />
                </div>
              </Slider>
            </div>
            <div className="slider-container">
              <Slider ref={sliderRef2} {...settings}>
                <div className="slider__img__wrapper">
                  <img src={rasm5} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm1} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm2} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm3} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={rasm4} alt="" className="slider__img" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
