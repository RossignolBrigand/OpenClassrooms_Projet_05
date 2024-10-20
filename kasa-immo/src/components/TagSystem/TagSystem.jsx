import React from "react";

import './_tags.scss'
import PropTypes from "prop-types";

function TagSystem({ data, className }) {
    return (
        <div className={className}>
            {data.map((tag, index) => (
                <button className="tag-btn" key={index}>{tag}</button>
            ))}
        </div>
    )
}

TagSystem.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default TagSystem;