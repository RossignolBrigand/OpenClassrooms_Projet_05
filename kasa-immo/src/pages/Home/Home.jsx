import React from "react";

import Banner from "../../components/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";
import CardItem from "../../components/CardItem/CardItem";

import LogementsData from "../../datas/logements.json";

import '../../styles/pages/_home.scss';


function Home() {
    return (
        <div className="home">
            <Banner />
            <CardContainer>
                {console.log(LogementsData)}
                <CardItem id="4" title="Best number" />
            </CardContainer>
        </div>
    )
}

export default Home;