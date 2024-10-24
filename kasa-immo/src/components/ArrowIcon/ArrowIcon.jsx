import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import './_arrow-icon.scss'

function ArrowIcon({ color }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => { setIsClicked(!isClicked) };

    return (
        <div className={`arrow-icon${isClicked ? ' rotated ' : ''}`} onClick={handleClick}>
            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7897 1.43154C11.4591 0.762119 12.5462 0.762119 13.2157 1.43154L23.4979 11.7138C24.1674 12.3832 24.1674 13.4704 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06782L2.92804 14.1344C2.25862 14.8039 1.17148 14.8039 0.502064 14.1344C-0.167355 13.465 -0.167355 12.3779 0.502064 11.7085L10.7843 1.42618L10.7897 1.43154Z" fill={color} />
            </svg>
        </div>
    )
}

ArrowIcon.propTypes = {
    color: PropTypes.string
}

export default ArrowIcon;

