import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/img/navbarLogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    if (event.target.value) {
      navigate(event.target.value);
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
          <li className="navbar_item">
            <select className="navbar_programs" onChange={handleSelectChange}>
              <option className="navbar_item" value="">
                Programs
              </option>
              <option className="navbar_item" value="/programs">
                International educational programs
              </option>
              <option className="navbar_item" value="/programs">
                Specialized courses
              </option>
              <option className="navbar_item" value="/programs">
                Islamic Finance Literacy Course
              </option>
              <option className="navbar_item" value="/programs">
                Certification program
              </option>
            </select>
          </li>
          <li className="navbar_item">
            <NavLink to={"/tools"}>Finance Tools</NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <div className="navbar_right">
          <select>
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
