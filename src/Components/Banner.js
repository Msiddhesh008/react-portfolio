import React from "react";
import console from "../Images/console-two.png";

const Banner = () => {
  return (
    <div className="max-width" id="banner">
      <div className="layer w-100">
        <div className="roww w-100 mt-5 ps-3 pe-3  pb-lg-4 ">
          <div className="col-lg-6 col-12 ps-3 ps-lg-3 pt-lg-5 pt-md-4 mb-5  ps-md-0 banner-left">
            <h1>
              The <span style={{ color: "#55efc4" }}>software engineer</span>{" "}
              <br /> that companies{" "}
              <span style={{ color: "#e84393" }}>love to hire</span>
            </h1>
            <p>Coding is a language that connects dreams with technology.</p>
            <button className="hero-btn">MORE ABOUT ME</button>
          </div>
          <div className="col-lg-6  col-12 pb-5 banner-right pe-lg-3">
            <img src={console} alt="console" className="console" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
