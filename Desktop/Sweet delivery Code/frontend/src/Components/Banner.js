import React from 'react';
import './Banner.css'; 

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-description">
                <h2>
                <b>Savor the Sweetness of SucroBee</b>
                </h2>
                <p>
                Unwrap Happiness Today!!
                </p>
                <div className="btn-container">
                    <a href="/menu">
                    Order Now!
                    </a>
                </div>
            </div>
            <div className="banner-image">
                <img src={require("../Assets/sweetsall.jpg")} alt="banner" className="webimg" />
            </div>
        </div>
    );
};
