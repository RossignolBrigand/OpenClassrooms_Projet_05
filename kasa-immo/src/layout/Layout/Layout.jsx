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

export default Layout;