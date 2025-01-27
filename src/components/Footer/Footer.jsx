import React from "react";
import "./Footer.css"
import behance from "./Icons/icons8-behance.svg"
import facebook from "./Icons/icons8-facebook-logo.svg"
import instagram from "./Icons/icons8-instagram.svg"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer--images">
                <div>
                    <Link to="https://www.behance.net/kasratorabi1" > <img src={behance}/> </Link>
                </div>
                <div>
                    <Link to="https://www.behance.net/kasratorabi1" > <img src={facebook}/> </Link>
                </div>
                <div>
                    <Link to="https://www.behance.net/kasratorabi1" > <img src={instagram}/> </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;