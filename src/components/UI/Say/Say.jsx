import React from "react";
import Slider from "react-slick";
import "./say.scss";
import rasm from "../../../assets/img/Frame 1116606757.png";
import { Navigate } from "react-router-dom";

const Say = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="say">
      <div className="say_wrapper">
        <h2 className="team_title">What students say</h2>
        <p className="team_text">
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>
        <Slider {...settings} className="say_slider">
          <div className="say_card">
            <p className="say_text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="say_card_bottom">
              <div className="say_card_left">
                <img src={rasm} alt="Finlay Kirk" className="say_img" />
              </div>
              <div className="say_card_right">
                <h4 className="say_card_title">Finlay Kirk</h4>
                <p className="say_card_text">Web designer</p>
              </div>
            </div>
          </div>
          <div className="say_card">
            <p className="say_text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="say_card_bottom">
              <div className="say_card_left">
                <img src={rasm} alt="Finlay Kirk" className="say_img" />
              </div>
              <div className="say_card_right">
                <h4 className="say_card_title">Finlay Kirk</h4>
                <p className="say_card_text">Web designer</p>
              </div>
            </div>
          </div>
          <div className="say_card">
            <p className="say_text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="say_card_bottom">
              <div className="say_card_left">
                <img src={rasm} alt="Finlay Kirk" className="say_img" />
              </div>
              <div className="say_card_right">
                <h4 className="say_card_title">Finlay Kirk</h4>
                <p className="say_card_text">Web designer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Say;
