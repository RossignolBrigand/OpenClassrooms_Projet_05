import React from "react";

import '../../styles/components/_tags.scss'

function TagSystem({ data }) {
    return (
        <div className="tags-container">
            {data.map((tag, index) => (
                <button className="tag-btn" key={index}>{tag}</button>
            ))}
        </div>
    )
}

export default TagSystem;