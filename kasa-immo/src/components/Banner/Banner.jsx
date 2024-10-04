import React from "react";
import '../../styles/components/_banner.scss'

function Banner({ imageSrc, text }) {
    return (
        <div className="banner">
            <img src={imageSrc} alt="Banner" className="banner__image" />
            <div className="banner__content">
                <h1 className="banner__text">{text}</h1>
            </div>
        </div>
    );
}

export default Banner;