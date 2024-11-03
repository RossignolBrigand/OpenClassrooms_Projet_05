import { NavLink } from "react-router-dom";
import LogoIcon from "../../components/LogoIcon/LogoIcon";

import './_header.scss'

//------------------------------------------------------------------

function Header() {

    return (
        <header className="header">
            <div>
                <LogoIcon />
            </div>
            <nav className="navbar">
                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? 'navbar__navlink active' : 'navbar__navlink'
                    }
                    to={'/'}>Accueil</NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'navbar__navlink active' : 'navbar__navlink'
                    }
                    to={'/about'}>À propos</NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'navbar__navlink active' : 'navbar__navlink'
                    }
                    to={'/login'}>Login</NavLink>
            </nav>
        </header >
    )
}

export default Header;