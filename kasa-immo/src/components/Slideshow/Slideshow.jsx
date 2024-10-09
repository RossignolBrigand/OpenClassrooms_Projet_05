import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import SlideshowItem from "../SlideshowItem/SlideshowItem";

import '../../styles/components/_slideshow.scss'

// --------------------------------------------------------------

const SlideshowContext = createContext();

function Slideshow({ slides }) {

    const [context, setContext] = useState({ items: [], edge: false });
    const timer = useRef(null);

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            if (context.items.length > 1 && context.edge) {
                const head = context.items.shift();
                context.items.push(head);
            }
            context.edge = !context.edge;
            setContext({ ...context });
        }, 2500);

        return () => clearTimeout(timer.current);
    });

    if (slides.length <= 1)
        return (
            <div className="slideshow">
                {slides.map((slide, index) => (
                    <img
                        className="slideshow__image"
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>
        )

    return (
        <SlideshowContext.Provider value={[context, setContext]} className="slideshow">
            {slides.map((slide, index) => (
                <div className="slideshow__content">
                    <SlideshowItem
                        index={index}
                        className="slideshow__content--image"
                        src={slide}
                        alt={`Slide ${index}`}
                    />
                    <p className="slideshow__content--img-counter">{index}/{slides.length}</p>
                </div>
            ))}
            <button className="slideshow__content--btn-prev">Image Précedente</button>
            <button className="slideshow__content--btn-next">Image Suivante</button>
        </SlideshowContext.Provider>
    )
}

Slideshow.propTypes = {
    slides: PropTypes.array
}

export default Slideshow;