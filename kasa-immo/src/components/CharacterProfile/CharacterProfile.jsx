import React from "react";

import './_characterprofile.scss'

function CharacterProfile({ person, className }) {

    return (
        <div className={className}>
            <h3 className={`${className}__name`}>{person.name}</h3>
            <img className={`${className}__img`} src={person.picture} alt={`Profil de ${person.name}`}></img>
        </div>
    )
}

export default CharacterProfile;