import React from "react";
import { Link } from "react-router-dom";

import './_error.scss'

function Error() {
    return (
        <div className="error">
            <h1 className="error__code">404</h1>
            <h2 className="error__content">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="error__link" to={'/home'}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;