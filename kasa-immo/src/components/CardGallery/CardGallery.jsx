import React from "react";

import '../../styles/components/_cardGallery.scss'

function CardGallery({ children }) {

    return (
        <div className="cards-gallery">
            {children}
        </div>
    )
}

export default CardGallery;