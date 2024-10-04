import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LogementsData from '../../datas/logements.json';


function LogementPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const logement = LogementsData.find((logement) => logement.id === String(id));

    useEffect(() => {
        if (!logement) {
            return (
                navigate('/error')
            )
        }
    }, [logement, navigate]);

    if (!logement) { return null };

    return (
        <div>
            <h1>Page de l'objet: {id} </h1>
            <h2>{logement.title}</h2>
            <p>{logement.description}</p>
            <p>This is a placeholder item for test purposes</p>
            <Link to={"/"}>Retour à l'accueil</Link>
        </div>
    )
}

export default LogementPage;