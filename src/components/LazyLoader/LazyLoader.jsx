import React from "react";
import "./lazyloader.scss";

import rasm from "../../assets/img/navbarLogo.png";

const LazyLoader = () => {
  return (
    <div className="lazy-loader-container">
      <div className="spinner">
        <img src={rasm} alt="" />
        <div className="inner-circle"></div>
      </div>
    </div>
  );
};

export default LazyLoader;
