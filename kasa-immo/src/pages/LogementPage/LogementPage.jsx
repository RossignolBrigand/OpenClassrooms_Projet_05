import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Slideshow from "../../components/Slideshow/Slideshow";
import Accordion from "../../components/Accordion/Accordion";

import LogementsData from '../../datas/logements.json';

import '../../styles/pages/_logement-page.scss';


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

        <div className="logement-page">
            <Slideshow
                slides={logement.pictures}
            />
            <h2>{logement.title}</h2>
            <p> Host : {logement.host.name}</p>
            <img src={logement.host.picture} alt=""></img>
            <div className="accordions-container">
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