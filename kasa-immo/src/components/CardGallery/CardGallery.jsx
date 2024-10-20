import React from "react";
import PropTypes from "prop-types";

import './_card-gallery.scss'

function CardGallery({ children }) {

    return (
        <div className="cards-gallery">
            {children}
        </div>
    )
}

CardGallery.propTypes = {
    children: PropTypes.array
}

export default CardGallery;