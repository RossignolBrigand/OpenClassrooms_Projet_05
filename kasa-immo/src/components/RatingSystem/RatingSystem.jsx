import React from "react";
import PropTypes from "prop-types";

import StarIcon from "../StarIcon/StarIcon";

import './_rating-system.scss'

//----------------------------------------------------------------------------------------------------

function RatingSystem({ rating, totalStars, className }) {

    return (
        <div className={`${className}`}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <StarIcon
                        key={index}
                        className={`star ${starValue <= rating ? 'star-filled' : 'star-empty'}`}
                    />
                )
            })}
        </div>
    )
}

RatingSystem.propTypes = {
    rating: PropTypes.string.isRequired,
    totalStars: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default RatingSystem;