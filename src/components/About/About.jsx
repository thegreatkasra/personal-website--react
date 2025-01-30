import React, { useRef, useEffect, useState } from "react";
import "./About.css"
import Layout from "../Layout/Layout"
import { gsap } from 'gsap';


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
            <div className="name" ref={textRef}>
                <h1 onClick={handleAnimate}>{text}</h1>
            </div>
        </Layout>
        </>
    )
};

export default About;