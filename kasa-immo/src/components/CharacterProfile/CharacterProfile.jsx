import React from "react";
import PropTypes from "prop-types";

import './_characterprofile.scss'

function CharacterProfile({ person, className }) {

    return (
        <div className={className}>
            <h3 className={`${className}__name`}>{person.name}</h3>
            <img className={`${className}__img`} src={person.picture} alt={`Profil de ${person.name}`}></img>
        </div>
    )
}

CharacterProfile.propTypes = {
    person: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
}

export default CharacterProfile;