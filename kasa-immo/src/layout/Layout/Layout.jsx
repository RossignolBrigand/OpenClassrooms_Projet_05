import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './_layout.scss';

function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout;