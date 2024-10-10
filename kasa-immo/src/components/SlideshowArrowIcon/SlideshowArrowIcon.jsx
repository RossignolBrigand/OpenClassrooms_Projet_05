import React from "react";
import "../../styles/components/_slidewhow-arrow-icon.scss"

function SlideshowArrowIcon({ color, className, onClick }) {

    return (
        <div className="arrow-icon-container" onClick={onClick}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill={color} />
            </svg>
        </div>
    )
}

export default SlideshowArrowIcon;