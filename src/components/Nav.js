import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        <HomeIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newandfeatured" exact>
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