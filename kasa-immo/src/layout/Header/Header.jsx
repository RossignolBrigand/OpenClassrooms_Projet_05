import { Link } from "react-router-dom";
import LogoIcon from "../../components/LogoIcon/LogoIcon";
import '../../styles/layout/_header.scss'

function Header() {

    return (
        <header className="header">
            <LogoIcon />
            <nav className="header__navbar">
                <Link className="navbar__navlink" to={'/'}>Accueil</Link>
                <Link className="navbar__navlink" to={'/about'}>À propos</Link>
            </nav>
        </header>
    )
}

export default Header;