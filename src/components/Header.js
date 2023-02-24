import React, { useState } from 'react';
import logo from "../images/logo.png"
import Nav from "./Nav";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false)

    const handleClick = () => {
        setIsOpenProfile(!isOpenProfile);
    }

    return (
        <div className='header-container'>
            <div className='header-container_top'>
                <NavLink to="/" className="logo-container">
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className="actions">
                    <PersonIcon onClick={() => handleClick()}/>
                    {isOpenProfile ? (
                        <div className="test">
                            <h2>Profil: Xyz</h2>
                        </div>
                    ) : ""}
                    
                    <ShoppingCartIcon />
                </div>
            </div>
            <Nav />
        </div> 
    )
}

export default Header;