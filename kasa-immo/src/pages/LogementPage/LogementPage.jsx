// We use the hook useParam to get the id corresponding to the item from which we want to render the data. 
// From this id we look for the same within our LogementsData. For each logement we check whether we find an item.id that matches our logement.id
// If we can't find one we navigate to error page to prevent any issues or crash of the app. 
//---------------------------------------------------------------------------------------------------

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Slideshow from "../../components/Slideshow/Slideshow";
import Accordion from "../../components/Accordion/Accordion";
import CharacterProfile from "../../components/CharacterProfile/CharacterProfile";
import TagSystem from "../../components/TagSystem/TagSystem";
import RatingSystem from "../../components/RatingSystem/RatingSystem";

import LogementsData from '../../datas/logements.json';

import './_logement-page.scss';

//------------------------------------------------------------------------------------------------

function LogementPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const logement = LogementsData.find((logement) => logement.id === String(id));

    useEffect(() => {
        if (!logement) {
            return (
                navigate('/Kasa/error')
            )
        }
    }, [logement, navigate]);

    if (!logement) { return null };

    return (

        <div className="logement-page">
            <Slideshow
                slides={logement.pictures}
            />
            <div className="logement-page__infos">
                <div className="title-container">
                    <h2 className="title-container__title">{logement.title}</h2>
                    <h3 className="title-container__location">{logement.location}</h3>
                </div>
                <CharacterProfile
                    person={logement.host}
                    className={"character-profile"}
                />
                <TagSystem
                    className={"tags-container"}
                    data={logement.tags}
                />
                <RatingSystem
                    rating={logement.rating}
                    totalStars={5}
                    className={"rating-system"}
                />
            </div>
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