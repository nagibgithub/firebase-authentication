import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const navBars = [
        {id: 1, path: '/', title: 'Home'},
        {id: 2, path: '/about', title: 'About Us'},
        {id: 3, path: '/login', title: 'Log In'},
    ]
    return (
        <nav>
            <h1>
                {
                    navBars.map(nav => <Link key={nav.id} to={nav.path}>{nav.title}</Link>)
                }
            </h1>
        </nav>
    );
};

export default Header;