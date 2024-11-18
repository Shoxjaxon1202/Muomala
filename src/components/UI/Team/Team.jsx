import React from "react";
import Slider from "react-slick";

import rasm1 from "../../../assets/img/Vector.png";
import rasm2 from "../../../assets/img/instagram2.png";
import rasm3 from "../../../assets/img/facebook-02.png";
import rasm4 from "../../../assets/img/twitter2.png";

import leftimg from "../../../assets/img/Pexels Photo by Italo Melo.png";

import "./team.scss";

const Team = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team">
      <div className="team_wrapper">
        <h2 className="team_title">Our Expert Team </h2>
        <p className="team_text">
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>
        <div className="slider-container">
          <Slider className="team_cards" {...settings}>
            <div className="team_card">
              <div className="team_left">
                <img src={leftimg} alt="" />
              </div>
              <div className="team_right">
                <h4 className="team_card_title">Dr. Mezbah Uddin Ahmed</h4>
                <p className="team_card_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="team_contact">
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm1} alt="Telegram" className="team_img" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm2} alt="Instagram" className="team_img" />
                  </a>
                  <a
                    href="https://facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm3} alt="Facebook" className="team_img" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm4} alt="Twitter" className="team_img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team_card">
              <div className="team_left">
                <img src={leftimg} alt="" />
              </div>
              <div className="team_right">
                <h4 className="team_card_title">Dr. Mezbah Uddin Ahmed</h4>
                <p className="team_card_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="team_contact">
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm1} alt="Telegram" className="team_img" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm2} alt="Instagram" className="team_img" />
                  </a>
                  <a
                    href="https://facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm3} alt="Facebook" className="team_img" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={rasm4} alt="Twitter" className="team_img" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
