import React from "react";
import { useState } from "react";

import '../../styles/components/_accordion.scss';
import ArrowIcon from "../ArrowIcon/ArrowIcon";


function Accordion({ id, title, content }) {

    const [isOpen, accordionIsOpen] = useState(false);

    return isOpen ? (
        <div className="accordion" key={id}>
            <div className="accordion__titleBar">
                <h2 className="accordion__titleBar--title">{title}</h2>
                <div onClick={() => accordionIsOpen(false)} className="accordion__titleBar--icon">
                    <ArrowIcon
                        color={"white"}
                    />
                </div>
            </div>
            <div className="accordion__content">
                <p className="accordion__content--text">
                    {content}
                </p>
            </div>
        </div >
    ) : (
        <div className="accordion" key={id}>
            <div className="accordion__titleBar">
                <h2 className="accordion__titleBar--title">{title}</h2>
                <div onClick={() => accordionIsOpen(true)} className="accordion__titleBar--icon">
                    <ArrowIcon
                        color={"white"}
                    />
                </div>
            </div>
        </div>
    )

}

export default Accordion;