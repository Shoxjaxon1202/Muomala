import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/img/navbarLogo.png";

import en from "../../assets/img/united-kingdom.png";
import ru from "../../assets/img/russia.png";
import uz from "../../assets/img/uzbekistan.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [languageImage, setLanguageImage] = useState(en);

  const handleSelectChange = (event) => {
    if (event.target.value) {
      navigate(event.target.value);
    }
  };

  const handleSelectLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === "en") {
      setLanguageImage(en);
    } else if (selectedLanguage === "ru") {
      setLanguageImage(ru);
    } else if (selectedLanguage === "uz") {
      setLanguageImage(uz);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <img src={logo} alt="Logo" className="navbar_img" />
        </div>
        <ul className="navbar_middle">
          <li className="navbar_item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="navbar__li">
            <p className="navbar__link navbar__droplink">
              Programs
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar_arrow">
                <path d="M5.57939 6.97499C5.44606 6.97499 5.32106 6.95415 5.20439 6.91249C5.08773 6.87082 4.97939 6.79999 4.87939 6.69999L0.279395 2.09999C0.0960612 1.91665 0.00439453 1.68332 0.00439453 1.39999C0.00439453 1.11665 0.0960612 0.883321 0.279395 0.699988C0.462728 0.516654 0.696061 0.424988 0.979395 0.424988C1.26273 0.424988 1.49606 0.516654 1.67939 0.699988L5.57939 4.59999L9.47939 0.699988C9.66273 0.516654 9.89606 0.424988 10.1794 0.424988C10.4627 0.424988 10.6961 0.516654 10.8794 0.699988C11.0627 0.883321 11.1544 1.11665 11.1544 1.39999C11.1544 1.68332 11.0627 1.91665 10.8794 2.09999L6.27939 6.69999C6.17939 6.79999 6.07106 6.87082 5.95439 6.91249C5.83773 6.95415 5.71273 6.97499 5.57939 6.97499Z" />
              </svg>
              <div className="navbar__dropdown">
                <NavLink className={"navbar__link"} to={"/programs"}>
                  International educational programs
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs"}>
                  Specialized courses
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs"}>
                  Islamic Finance Literacy Course
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs"}>
                  Certification program
                </NavLink>
              </div>
            </p>
          </li>
          <li className="navbar_item">
            <NavLink to={"/tools"}>Finance Tools</NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <div className="navbar_right">
          <img className="navbar_language" src={languageImage} alt="Language" />
          <select onChange={handleSelectLanguageChange}>
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
            <option value="uz">Uzb</option>
          </select>
          <div className="navbar_palka"></div>
          <NavLink to={"/login"}>
            <button className="navbar_btn">Sign in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
