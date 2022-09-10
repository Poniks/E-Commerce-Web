import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
            <div className='searchBar'>
                <SearchIcon />
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </nav>
    )
}

export default Nav;