import React from "react";

import Banner from "../../components/Banner/Banner";
import imageSrc from '../../assets/covers/Cover2.png'
import Accordion from "../../components/Accordion/Accordion";

import '../../styles/pages/_about.scss'
import AboutData from '../../datas/about.json'

function About() {

    return (
        <div className="about">
            <Banner
                imageSrc={imageSrc}
            />
            <div className="about__accordion-wrapper">
                {AboutData.map((accordion) => (
                    <Accordion
                        key={accordion.id}
                        title={accordion.title}
                        content={accordion.content}
                    />
                ))}
            </div>
        </div>
    )

}

export default About;