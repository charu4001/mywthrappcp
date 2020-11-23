import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center">My Weather App</a>
                <ul className="left hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Info">Info</Link></li>
                    <li><Link to="/Tictactoe">Tictactoe</Link></li>
                </ul>
            </div>
        </nav>
    )
}
       
export default Navbar;