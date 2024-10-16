import React from "react";

import './_card-gallery.scss'

function CardGallery({ children }) {

    return (
        <div className="cards-gallery">
            {children}
        </div>
    )
}

export default CardGallery;