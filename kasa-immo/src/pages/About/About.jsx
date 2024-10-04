import React from "react";

import Banner from "../../components/Banner/Banner";
import imageSrc from '../../assets/covers/Cover2.png'

import '../../styles/pages/_about.scss'

function About() {
    return (
        <div className="about">
            <Banner
                imageSrc={imageSrc}
            />
            <h1>Hello About</h1>
        </div>
    )

}

export default About;