import React from 'react';
import logo from '../../images/logo.png';
import './header.css';


const Header = () => {
    return (
        <header>
            <div className="banner-container">
                <img src={logo} alt="Logo" />
                <div class="banner-text" id="baseline">Loué(e) sois- tu !</div>
            </div>
        </header>
    )
}

export default Header;