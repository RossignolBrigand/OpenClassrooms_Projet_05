//-------------------------------------------------------------------------------------------------
// This component has two main points. 
// The first is that based on a state the component renders either just the title bar or the title bar and div with content. 
//The second point is that we check whether the content is a string or an array and renders a paragraph or a list.
//-------------------------------------------------------------------------------------------------
import React from "react";
import { useState } from "react";

import './_accordion.scss';
import ArrowIcon from "../ArrowIcon/ArrowIcon";

//-------------------------------------------------------------------------------------------

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
                {/* Check if content is a string */}
                {typeof content === 'string' ? (
                    <p className="accordion__content--text">{content}</p>
                ) : null}

                {/* Check if content is an array */}
                {Array.isArray(content) ? (
                    <ul className="accordion__content--ul">
                        {content.map((item, index) => (
                            <li key={index} className="accordion__content--li">{item}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div >
    ) : (
        <div className="accordion" key={id}>
            < div className="accordion__titleBar" >
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