import React from 'react';
import logo from '../images/air.png';

export default function Bar(){
    return(
        <nav className='navbar'>
            <img src={logo} className="airLogo" alt="airbnb logo" />
        </nav>
    );
}