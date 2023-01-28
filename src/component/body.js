import React from 'react';
import homeLogo from '../images/home.jpg';
import home2 from '../images/home2.jpg';

export default function Body(){
    return(
        <div className='body'>
             <div className="image-container">
            <img src={homeLogo} alt="home logo" className='homelogo'/>
            <img src={home2} alt="home logo" className='home2'/>
            </div>
            <h2>Online Experiences</h2>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    );
}