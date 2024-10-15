import React from "react";
import './_banner.scss'

function Banner({ imageSrc, text }) {

    return (
        <div className="banner">
            <img src={imageSrc} alt={`Banner ${imageSrc}`} className="banner__image" />
            <div className="banner__content">
                {text && (
                    <h1 className="banner__text">{text}</h1>
                )};
            </div>
        </div>
    );
}

export default Banner;