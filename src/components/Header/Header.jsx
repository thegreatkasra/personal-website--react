import React from "react";
import "./Header.css"
import logo from './Svg/logo.svg';
import Button from "../Button/Button";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <Button>Download Resume</Button>
            </div>
        </div>
    )
}

export default Header;