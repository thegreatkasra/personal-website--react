import React from "react";
import "./PortfolioCard.css"

const PortfolioCard = ({image,title,description}) =>{
    return(
        <div className="portfoliocard">
            <hr/>
            <div className="card--left-content">
            <img src={image}></img>
            </div>
            <div className="card--right-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;