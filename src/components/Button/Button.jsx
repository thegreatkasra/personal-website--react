import React from "react"; 
import "./Button.css";

const Button = ({ children, download }) => {
    return (
        <button className="button" onClick={() => window.open(download, "_blank")}>
            {children}
        </button>
    );
};

export default Button;
