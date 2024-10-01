import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Error from '../../pages/Error/Error';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;