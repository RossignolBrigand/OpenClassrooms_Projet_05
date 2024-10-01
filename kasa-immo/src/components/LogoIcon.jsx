import logoSrc from '../assets/logo-kasa.png';


function LogoIcon() {
    const Logo = <img className="header__logo" src={logoSrc} alt="logo Kasa"></img>

    return (
        <div>
            {Logo}
        </div>
    )
}

export default LogoIcon;