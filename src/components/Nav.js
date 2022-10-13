import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >
                        <HomeIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newandfeatured" >
                        New & Featured
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/men" >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/women" >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kids" >
                        Kids
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;