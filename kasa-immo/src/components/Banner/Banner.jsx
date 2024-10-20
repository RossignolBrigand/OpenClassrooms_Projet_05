import React from "react";
import './_banner.scss'
import PropTypes from "prop-types";

function Banner({ imageSrc, text }) {

    return (
        <div className="banner">
            <img src={imageSrc} alt={`Banner ${imageSrc}`} className="banner__image" />
            <div className="banner__content">
                {text && (
                    <h1 className="banner__text">{text}</h1>
                )}
            </div>
        </div>
    );
}

Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Banner;