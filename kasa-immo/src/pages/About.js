import React from "react";
import Nav from "../components/Nav";

function About() {
    return(
        <div>
            <h1>About</h1>
            <p>This is the about page.</p>
            <Nav/>
            <a href="./NotFound.js">This leads nowhere just for testing</a>
        </div>
    );
}

export default About;