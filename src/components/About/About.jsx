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
                <h4>
                    Front-end :
                </h4>
                <p>
                Strong knowledge in front-end development, including HTML, CSS, JavaScript, and frameworks like React, with a focus on responsive design.
                </p>
                <h4>
                    UX/UI DESIGNER :
                </h4>
                <p>
                 I’ve expanded my knowledge of UI/UX design through self-study using Persian and English resources. These materials have helped me understand user behavior, design patterns, and the importance of usability. By studying from various tutorials, articles, and case studies.
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