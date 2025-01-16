import LogoIcon from "../../components/LogoIcon/LogoIcon";
import "./_footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<LogoIcon color={"white"} />
			<p className="footer__content">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
