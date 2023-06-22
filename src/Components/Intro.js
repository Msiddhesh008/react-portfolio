import React from "react";

const Intro = () => {
  return (
    <div id="intro" className="max-width w-100 p-lg-5 p-0">
      <p className="title">HELLO,</p>
      <h1 className="mb-5 sub-title">I'm Siddhesh More</h1>
      <p className="para">
        I am a skilled <b>React Developer</b> with 1Yr plus of experience in
        building complex web applications. I am proficient in React, Redux, and
        other related technologies. I am committed to delivering high-quality
        code and ensuring excellent user experiences.{" "}
      </p>
      <div className="row card-row justify-content-center m-lg-3 mt-5 mb-5 w-100">
        <div className="col-lg-2 card col-6 b-one m-2 ">
          <span>M</span>
          <p>Mongo</p>
        </div>
        <div className="col-lg-2 card col-6 b-two m-2 ">
          <span>E</span>
          <p>Express</p>
        </div>
        <div className="col-lg-2 card col-6 b-three m-2 ">
          <span>R</span>
          <p>React</p>
        </div>
        <div className="col-lg-2 card col-6 b-four m-2 ">
          <span>N</span>
          <p>Node</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
