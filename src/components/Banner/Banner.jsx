import React from "react";
import Button from "../Button/Button";
import './Banner.css'
import Space from "../Space/Space";
import kasraImg from './kasra.png'
import bannerImg from "./banner-background.png";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner--BackgroundImage">
        <img src={bannerImg} />
      </div>
      <div className="Banner--Quote">
        <h5>
          Voluptate aliquip tempor cupidatat eu reprehenderit pariatur nisi
          dolor fugiat mollit officia in enim.
        </h5>
      </div>
      <div className="Banner--Child">
        <div className="Banner--Content">
          <h1>
            Hi!
            <span className="Banner__primaryColor"> I'm Kasra Torabi</span>
            <br />
            Great to see you.
          </h1>
          <h3>
            Sunt duis ut ad cupidatat commodo dolor nostrud pariatur incididunt
            veniam pariatur labore id ea.
          </h3>
          <Space />
          <Space />
          <div className="Banner--Button">
            <Button>Download Resume</Button>
          </div>
        </div>
        <div className="Banner--Profile">
          <img src={kasraImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
