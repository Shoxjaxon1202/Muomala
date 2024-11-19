import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../Styles/login.scss";

import logo from "../assets/img/navbarLogo.png";
import brat from "../assets/img/Image.png";
import qiz from "../assets/img/illustration image.png";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    toast.success("You are logged in");
    navigate("/");
  }

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
          <form onSubmit={handleSubmit} className="login_form">
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
            <button className="login_btn">Sign in</button>
          </form>
          <NavLink to={"/register"}>Create a new account !</NavLink>
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

export default Login;
