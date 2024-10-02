import React from "react";

import '../../styles/components/_cardContainer.scss'

function CardContainer({ children }) {

    return (
        <div className="cards-container">
            {children}
        </div>
    )
}

export default CardContainer;