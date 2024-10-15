import React from "react";

import './_tags.scss'

function TagSystem({ data, className }) {
    return (
        <div className={className}>
            {data.map((tag, index) => (
                <button className="tag-btn" key={index}>{tag}</button>
            ))}
        </div>
    )
}

export default TagSystem;