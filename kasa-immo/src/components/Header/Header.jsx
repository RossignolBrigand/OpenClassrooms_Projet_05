import { Link } from "react-router-dom";
import '../../assets/logo-kasa.png';
import '../../styles/components/_header.scss'

function Header() {
    return (
        <header>
            <img className="navbar__logo" src="../../ assets / logo - kasa.png" alt="logo Kasa"></img>
            <nav className="navbar">
                <Link className="navbar__navlink" to={'/'}>Home</Link>
                <Link className="navbar__navlink" to={'/about'}>A propos</Link>
            </nav>
        </header>
    )
}

export default Header;