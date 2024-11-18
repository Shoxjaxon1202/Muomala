import React from "react";
import { NavLink } from "react-router-dom";

import "../Styles/login.scss";

import logo from "../assets/img/navbarLogo.png";
import brat from "../assets/img/Image.png";
import qiz from "../assets/img/illustration image.png";

const Register = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_left">
          <div className="login_left_top">
            <img src={logo} alt="" className="login_left_img" />
            <div className="login_left_box">
              <p className="login_left_text">Questions?</p>
              <h4 className="login_left_title">Ask Diyor</h4>
            </div>
          </div>
          <h2 className="login_title">Get started</h2>
          <div className="register_box">
            <p className="login_left_text">Already have an account?</p>
            <NavLink id="register_link" to={"/login"}>
              Sign in
            </NavLink>
          </div>
          <form className="login_form">
            <span className="login_span">
              <input
                required
                placeholder="Enter your name"
                type="text"
                className="login_input"
              />
              <img src="" alt="" className="login_email" />
            </span>
            <span className="login_span">
              <input
                required
                placeholder="Enter your email"
                type="email"
                className="login_input"
              />
              <img src="" alt="" className="login_email" />
            </span>
            <span className="login_span">
              <input
                required
                placeholder="Password"
                type="password"
                className="login_input"
              />
            </span>
            <button className="login_btn">Log in</button>
          </form>
        </div>
        <img src={brat} alt="" className="login_img" />
        <div className="login_right">
          <img src={qiz} alt="" className="login_right_img" />
          <h3 className="login_right_title">
            Welcome to Al Muamalat - Empowering Your Journey in Islamic Finance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
