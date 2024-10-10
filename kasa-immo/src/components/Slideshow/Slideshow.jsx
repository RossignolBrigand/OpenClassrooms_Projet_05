import React, { useState } from "react";

import PropTypes from "prop-types";

import '../../styles/components/_slideshow.scss'
import SlideshowArrowIcon from "../SlideshowArrowIcon/SlideshowArrowIcon";
import { useSearchParams } from "react-router-dom";

// --------------------------------------------------------------

const ArrowColor = "white";
function Slideshow({ slides }) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1)
    }

    if (slides.length <= 1)
        return (
            <div className="slideshow" key={"Slide 1"}>
                {slides.map((data, index) => (
                    <img
                        className="slideshow__slide--img"
                        key={index}
                        src={data}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>
        )

    return (
        <div className="slideshow">
            <SlideshowArrowIcon
                color={ArrowColor}
                className="slideshow-arrowbtn arrow-left"
                onClick={prevSlide}
            />
            {slides.map((data, index) => (
                <div className={`${slide === index ? 'slideshow__slide' : 'slideshow__slide slideshow__slide-hidden'}`} key={`Slide ${index}`}>
                    <img
                        className={`slideshow__slide--img`}
                        key={index}
                        src={data}
                        alt={`Slide ${index}`}
                    />
                    <p className="slideshow__slide--counter">{index + 1}/{slides.length}</p>
                </div>
            ))}
            <SlideshowArrowIcon
                color={ArrowColor}
                className="slideshow-arrowbtn arrow-right"
                onClick={nextSlide}
            />
        </div>
    )
}

Slideshow.propTypes = {
    slides: PropTypes.array
}

export default Slideshow;