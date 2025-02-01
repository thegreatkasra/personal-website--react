import React, {useRef, useEffect} from "react";
import './Banner.css'
import Space from "../Space/Space";
import kasraImg from './kasra.png'
import bannerImg from "./banner-background.png";
import { gsap } from 'gsap';


const Banner = () => {

  const textRef = useRef();
  useEffect(() => {
    gsap.from(textRef.current, {
        x: -300,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    })
},[]);

  return (
    <div className="Banner">
      <div className="Banner--BackgroundImage">
        <img src={bannerImg} />
      </div>
      <div className="Banner--Child">
        <div className="Banner--Content" ref={textRef}>
          <h1>
            Hi!
            <span className="Banner__primaryColor"> I'm Kasra Torabi</span>
            <br />
            Great to see you.
          </h1>
          <h3>
           I’m a UI/UX designer and Front-end Developer with a background in Software Engineering. I love creating intuitive and visually engaging interfaces that make a real difference for users. I’m quick to pick up new skills and enjoy taking on challenges in new work environments. Building strong relationships and working well with others is really important to me. Every job is an opportunity to learn and grow, both personally and professionally. My goal is to be part of innovative teams where I can make a meaningful impact and keep improving as a designer and developer.
          </h3>
          <Space />
        </div>
        <div className="Banner--Profile">
          <img src={kasraImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
