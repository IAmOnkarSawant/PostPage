import React from 'react';
import {NavLink} from 'react-router-dom'

import './NavLinks.css';

const NavLinks= props=> {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/' exact>Home</NavLink>
            </li>
            <li>
                <NavLink to='/posts' exact>posts</NavLink>
            </li>
            <li>
                <NavLink to='/' exact>Categories</NavLink>
            </li>
            <li>
                <NavLink to='/' exact >ALL</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;