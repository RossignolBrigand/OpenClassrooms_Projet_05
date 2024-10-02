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
                {console.log(LogementsData)}
                <CardItem id="4" title="Best number" />
                <CardItem id="4" title="Best number" />
                <CardItem id="4" title="Best number" />
                <CardItem id="4" title="Best number" />
                <CardItem id="4" title="Best number" />
                <CardItem id="4" title="Best number" />
            </CardGallery>
        </div>
    )
}

export default Home;