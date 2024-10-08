import React from "react";
import { useState } from "react";

import '../../styles/components/_accordion.scss';
import ArrowIcon from "../ArrowIcon/ArrowIcon";


function Accordion({ id, title, content }) {

    const [isOpen, accordionIsOpen] = useState(false);

    return isOpen ? (
        <div className="accordion" key={id}>
            <div className="accordion__title">
                <h2 className="accordion__title--content">{title}</h2>
                <div onClick={() => accordionIsOpen(false)} className="accordion__title--icon">
                    <ArrowIcon
                        color={"white"}
                    />
                </div>
            </div>
            <div className="accordion__content">
                {content}
            </div>
        </div >
    ) : (
        <div className="accordion" key={id}>
            <div className="accordion__title">
                <h2 className="accordion__title--content">{title}</h2>
                <div onClick={() => accordionIsOpen(true)} className="accordion__title--icon">
                    <ArrowIcon
                        color={"white"}
                    />
                </div>
            </div>
        </div>
    )

}

export default Accordion;