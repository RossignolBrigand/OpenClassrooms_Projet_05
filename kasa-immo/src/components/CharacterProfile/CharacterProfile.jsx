import React from "react";

import '../../styles/components/_characterprofile.scss'

function CharacterProfile({ person }) {

    return (
        <div className="character-profile">
            <h3 className="character-profile__name">{person.name}</h3>
            <img className="character-profile__img" src={person.picture} alt={`Profil de ${person.name}`}></img>
        </div>
    )
}

export default CharacterProfile;