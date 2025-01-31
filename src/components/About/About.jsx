import React, { useRef, useEffect, useState } from "react";
import "./About.css"
import Layout from "../Layout/Layout"
import { gsap } from 'gsap';
import Lottie from "lottie-react";
import reactlogo from "./svg/react.svg"
import figma from "./svg/Figma.svg"
import nextjs from "./svg/nextjs.svg"
import animationData from "./svg/Animation.json";


const About = () =>{
    
    const textRef = useRef();
    const[text, setText] = useState("About Kasra Torabi");

    const handleAnimate = () =>{
        setText("Dont Touch ! :D");
        gsap.to(textRef.current, {
            y: -500,
            opacity: 0,
            duration: 4,
            scale:0.4,
        })
    };

    useEffect(() => {
        gsap.from(textRef.current, {
            x: -300,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        })
    },[]);
    
    return (
        <>
        <Layout>
        <div className="about">
        <div className="about--name" ref={textRef}>
                <h1 onClick={handleAnimate}>{text}</h1>
            </div>
            <div className="about--explain">
                <p>
                I’m a UI/UX designer and Front-end Developer with a background in Software Engineering. I love creating intuitive and visually engaging interfaces that make a real difference for users. I’m quick to pick up new skills and enjoy taking on challenges in new work environments. Building strong relationships and working well with others is really important to me. Every job is an opportunity to learn and grow, both personally and professionally. My goal is to be part of innovative teams where I can make a meaningful impact and keep improving as a designer and developer.
                </p>
            </div>
            <div className="about--images">
                <img className="about--image1" src={reactlogo}></img>
                <img className="about--image2" src={figma}></img>
                <img className="about--image3" src={nextjs}></img>
            </div>

            <div className="about--gif">
                <Lottie animationData={animationData} loop={true} />
            </div>
            
        </div>
        </Layout>
        </>
    )
};

export default About;