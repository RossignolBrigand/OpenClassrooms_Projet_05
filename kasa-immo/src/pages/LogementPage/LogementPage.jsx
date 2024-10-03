import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import LogementsData from '../../datas/logements.json';

function LogementPage() {

    const { id } = useParams();

    const logement = LogementsData.find((logement) => logement.id === String(id));

    if (!logement) {
        return <div>Logement non trouvé ou inexistant</div>;
    }

    return (
        <div>
            <h1>Page de l'objet: {id} </h1>
            <h2>{logement.title}</h2>
            <p>{logement.description}</p>
            <p>This is a placeholder item for test purposes</p>
        </div>
    )
}

export default LogementPage;