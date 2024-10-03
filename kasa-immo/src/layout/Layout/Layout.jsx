import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import '../../styles/layout/_layout.scss';

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