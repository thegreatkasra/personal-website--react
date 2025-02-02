import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Layout from "../Layout/Layout";
import PortfolioCard from "../Card/PortfolioCard";
import image1 from "./img/uber.png";
import image2 from "./img/fenty.png";
import image3 from "./img/nika.png";

const Portfolio = () => {
    const images = [image1, image2, image3];
    const titles = ["Uber", "Fenty Beauty", "NikaFilm"];
    const descriptions = [
        "This is a production startup for food delivery services using AI to give users a better experience with the menu.",
        "A E-commerce website to sell rihanna's makeup and beauty tools.",
        "A online movie platform to watch movies online and a blog to see news for a better SEO."
    ];

    const [image, setImage] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        setImage(images);
        setTitle(titles);
        setDescription(descriptions);
    }, []);

    return (
        <Layout>
            <div className="portfolio">
                <div className="portfolio--header">
                    <h2>Recently Portfolio</h2>
                </div>
                <div className="portfolio--cards">
                    {image.map((img, index) => (
                        <PortfolioCard 
                            key={index} 
                            image={img} 
                            title={title[index]} 
                            description={description[index]} 
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;
