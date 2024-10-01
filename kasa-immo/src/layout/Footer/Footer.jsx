import LogoIcon from '../../components/LogoIcon/LogoIcon';
import '../../styles/layout/_footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <LogoIcon />
            <p className='footer__content'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;