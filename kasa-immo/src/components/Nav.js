import React from "react"
import { Link } from 'react-router-dom';
import '../styles/components/Nav.scss';

function Nav() {
   return(
        <nav className="nav">
            <ul>
                <li className="navlink">
                    <Link className='navlink__element' to="/">Home</Link>
                </li>
                <li className="navlink">
                    <Link className='navlink__element' to="/about">About</Link>
                </li>
            </ul>
        </nav>
   ); 
}

export default Nav;
