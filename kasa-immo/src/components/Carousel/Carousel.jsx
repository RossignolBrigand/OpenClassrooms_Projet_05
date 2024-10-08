import React from "react";
import { useState, useEffect } from "react";

import '../../styles/components/_carousel.scss'


function Carousel(images) {

    console.log(images);

    return (
        <div>
            <button>Image Précedente</button>
            <button>Image Suivante</button>
            <p>There should be pictures here</p>
        </div>
    )
}

export default Carousel;