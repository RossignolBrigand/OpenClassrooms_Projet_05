import { Link } from "react-router-dom";
import '../../assets/logo-kasa.png';
import '../../styles/components/_header.scss'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="../../ assets / logo - kasa.png" alt="logo Kasa"></img>
            <nav className="header__navbar">
                <Link className="navbar__navlink" to={'/'}>Home</Link>
                <Link className="navbar__navlink" to={'/about'}>A propos</Link>
            </nav>
        </header>
    )
}

export default Header;