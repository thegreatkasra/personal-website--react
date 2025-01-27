import React from "react";
import "./Header.css"
import logo from './Svg/logo.svg';
import Button from "../Button/Button";
import { Link , useLocation } from "react-router-dom";

const Header = () => {
    const Location = useLocation();
    return (
        <div className="header">
            <div className="logo">
            <Link to="/">
                 <img src={logo} alt="Logo"/>
            </Link>
            </div>
            <div className="navigation">
                <ul>
                    <li> <Link className={Location.pathname === "/" ? "active" : "link"} to="/">Home</Link> </li>
                    <li> <Link className={Location.pathname === "/About" ? "active" : "link"} to="/About">About</Link> </li>
                    <li> <Link className={Location.pathname === "/Portfolio" ? "active" : "link"} to="/Portfolio">Portfolio</Link> </li>
                    <li> <Link className={Location.pathname === "/Contact" ? "active" : "link"} to="/Contact">Contact</Link> </li>
                </ul>
            </div>
            <div>
                <Button>Download Resume</Button>
            </div>
        </div>
    )
}

export default Header;