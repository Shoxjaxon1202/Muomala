import React from "react";
import Slider from "react-slick";

import "./intro.scss";

import yulduzcha from "../../../assets/img/rate.png";
import rasm1 from "../../../assets/img/Ellipse67.png";
import rasm2 from "../../../assets/img/Ellipse68.png";
import rasm3 from "../../../assets/img/Ellipse69.png";

import rightimg from "../../../assets/img/image-uM5ZOTW7R-transformed1 (1).png";
const Intro = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="intro">
      <div className="intro_wrapper">
        <div className="slider-container">
          <Slider className="" {...settings}>
            <div className="intro_card">
              <div className="intro_left">
                <button className="intro_topbtn">
                  Seeking Knowledge is an Obligation in Islam
                </button>
                <h1 className="intro_title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro_bottom">
                  <button className="intro_btn">Students’ opnion</button>
                  <div className="intro_imgs">
                    <img src={rasm1} alt="" className="intro_img" />
                    <img src={rasm2} alt="" className="intro_img" />
                    <img src={rasm3} alt="" className="intro_img" />
                  </div>
                  <img src={yulduzcha} alt="" />
                </div>
              </div>
              <div className="intro_right">
                <img src={rightimg} alt="" />
              </div>
            </div>
            <div className="intro_card">
              <div className="intro_left">
                <button className="intro_topbtn">
                  Seeking Knowledge is an Obligation in Islam
                </button>
                <h1 className="intro_title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro_bottom">
                  <button className="intro_btn">Students’ opnion</button>
                  <div className="intro_imgs">
                    <img src={rasm1} alt="" className="intro_img" />
                    <img src={rasm2} alt="" className="intro_img" />
                    <img src={rasm3} alt="" className="intro_img" />
                  </div>
                  <img src={yulduzcha} alt="" />
                </div>
              </div>
              <div className="intro_right">
                <img src={rightimg} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Intro;
