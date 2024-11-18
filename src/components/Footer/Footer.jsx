import React from "react";

import "./footer.scss";

import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

import rasm1 from "../../assets/img/youtube.png";
import rasm2 from "../../assets/img/facebook.png";
import rasm3 from "../../assets/img/twitter.png";
import rasm4 from "../../assets/img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <img src={logo} alt="" className="footer_img" />
        <ul className="footer_list">
          <li className="footer_item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="footer_item">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="footer_item">
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li className="footer_item">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
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
        <hr />
        <p className="footer_text">Copyright Satyam Studio</p>
      </div>
    </div>
  );
};

export default Footer;
