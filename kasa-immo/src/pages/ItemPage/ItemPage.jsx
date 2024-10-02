import React from "react";
import PropTypes from "prop-types";

function ItemPage(props) {

    const { id } = props.match.params;

    return (
        <div>
            <h1>Page de l'objet: {id} </h1>
            <p>This is a placeholder item for test purposes</p>
        </div>
    )
}

ItemPage.propTypes = {
    id: "number"
}

export default ItemPage;