import React from "react";
import Banner from "../../components/Banner/Banner";
import '../../styles/pages/_home.scss';

function Home() {
    return (
        <div className="home">
            <Banner />
            <h1>Hello Home</h1>
        </div>
    )
}

export default Home;