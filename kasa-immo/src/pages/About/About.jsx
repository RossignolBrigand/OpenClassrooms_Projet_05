import React from "react";

import Banner from "../../components/Banner/Banner";
import imageSrc from '../../assets/covers/Cover2.png'
import Accordion from "../../components/Accordion/Accordion";

import AboutData from '../../datas/about.json'
import './_about.scss'

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