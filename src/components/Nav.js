import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new&featured" exact>
                        New & Featured
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/men" exact>
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/women" exact>
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kids" exact>
                        Kids
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;