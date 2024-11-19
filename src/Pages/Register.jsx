import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import CountryFlag from "react-country-flag";
import countryList from "react-select-country-list";

import "../Styles/login.scss";
import logo from "../assets/img/navbarLogo.png";
import brat from "../assets/img/Image.png";
import qiz from "../assets/img/illustration image.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const countries = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const options = countries.map((country) => ({
    value: country.value,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <CountryFlag
          countryCode={country.value}
          svg
          style={{ width: "20px", marginRight: "8px" }}
        />
        {country.label}
      </div>
    ),
  }));

  const onSubmit = (data) => {
    console.log("Selected country:", selectedCountry);
    toast.success("You are registered");
    navigate("/");
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_left">
          <div className="login_left_top">
            <img src={logo} alt="Logo" className="login_left_img" />
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
          <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <span className="login_span">
              <input
                required
                placeholder="Enter your name"
                type="text"
                className="login_input"
                {...register("name", { required: true })}
              />
            </span>
            <span className="login_span">
              <input
                required
                placeholder="Enter your email"
                type="email"
                className="login_input"
                {...register("email", { required: true })}
              />
            </span>
            <span className="login_span">
              <input
                required
                placeholder="Password"
                type="password"
                className="login_input"
                {...register("password", { required: true })}
              />
            </span>
            <span className="login_span">
              <Select
                required
                options={options}
                placeholder="Select your country"
                onChange={handleCountryChange}
                className="select_country"
              />
            </span>
            <button type="submit" className="login_btn">
              Register
            </button>
          </form>
        </div>
        <img src={brat} alt="Illustration" className="login_img" />
        <div className="login_right">
          <img src={qiz} alt="Illustration" className="login_right_img" />
          <h3 className="login_right_title">
            Welcome to Al Muamalat - Empowering Your Journey in Islamic Finance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
