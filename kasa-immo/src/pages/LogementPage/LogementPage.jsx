import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";

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
            <Carousel
                images={[logement.pictures]}

            />
            <h2>{logement.title}</h2>
            <p> Host : {logement.host.name}</p>
            <img src={logement.host.picture} alt=""></img>
            <div>
                <Accordion
                    title={"Description"}
                    content={logement.description}
                />
                <Accordion
                    title={"Équipements"}
                    content={logement.equipments}
                />
            </div>
        </div >
    )
}

export default LogementPage;