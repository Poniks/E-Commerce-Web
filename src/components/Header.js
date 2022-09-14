import React from 'react';
import logo from "../images/logo.png"
import Nav from "./Nav";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-container_top'>
                <NavLink to="/" exact className="logo-container">
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className="actions">
                    <PersonIcon />
                    <ShoppingCartIcon />
                </div>
            </div>
            <Nav />
        </div> 
    )
}

export default Header;