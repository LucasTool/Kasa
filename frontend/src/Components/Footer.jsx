import React from 'react';
import Logofooter from '../assets/Logofooter.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <img src={Logofooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;