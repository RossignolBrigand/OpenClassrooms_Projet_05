import React from "react";
import Nav from "../components/Nav";

function Home () {
    return(
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <Nav/>
            <a href="./NotFound.js">This leads nowhere just for testing</a>
        </div>
    );
}

export default Home;