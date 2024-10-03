import React from "react";

import Banner from "../../components/Banner/Banner";
import CardGallery from "../../components/CardGallery/CardGallery";
import CardItem from "../../components/CardItem/CardItem";

import LogementsData from "../../datas/logements.json";

import '../../styles/pages/_home.scss';


function Home() {

    return (
        <div className="home">
            <Banner />
            <CardGallery>
                {LogementsData.map((logement) => (
                    <CardItem
                        key={`${logement.id}-${logement.title}`}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </CardGallery>
        </div>
    )
}

export default Home;