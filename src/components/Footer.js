import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="box">
                <div className="box_item">
                    <h3 className='box_item_title'>Produkty</h3>
                    <ul>
                        <li>Promocje</li>
                        <li>Nowe</li>
                        <li>Najczęściej kupowane</li>
                    </ul>
                </div>
                <div className="box_item">
                    <h3 className='box_item_title'>O nas</h3>
                    <ul>
                        <li>Polityka Prywatności</li>
                        <li>Regulamin</li>
                        <li>Dostawa</li>
                        <li>Zwroty i reklamacje</li>
                        <li>Kontak z nami</li>
                    </ul>
                </div>
                <div className="box_item">
                    <h3 className='box_item_title'>Kontakt</h3>
                    <ul>
                        <li><PhoneIcon /> <span>664 975 603</span></li>
                        <li><MailIcon /> <span>nadstogakuba@gmail.com</span></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                Copyright 2022 E-Com. All rights reserved.
            </div>
        </div> 
    )
}

export default Footer;