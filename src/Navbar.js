import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a class="brand-logo center">My Weather App</a>
                <ul class="left hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Info">Info</a></li>
                </ul>
            </div>
        </nav>
    )
}



        
export default Navbar;