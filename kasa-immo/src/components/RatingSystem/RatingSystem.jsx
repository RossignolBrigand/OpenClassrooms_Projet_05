import React from "react";

import StarIcon from "../StarIcon/StarIcon";

import './_rating-system.scss'

function RatingSystem({ rating, totalStars, className }) {

    return (
        <div className={`${className}`}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                console.log(starValue)
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
export default RatingSystem;