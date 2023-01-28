import React from 'react';
import star from '../images/star.png';


export default function Card(props){
   let badgText;
   if(props.openSpots===0){
    badgText="SOLD OUT"
   }else{
    badgText="ONLINE"
   }
    return (
        <div className='card-container'>
         <div className="card--badg">{badgText}</div>
            <img src={require(`../images/${props.coverImg}`)} alt='katie' className='katie'/>
            <div className='star-rating-review'>
            <img src={star} alt='star' className='staricon'/>
            <p className='beside-star'>{props.stats.rating}</p>
            <p className='beside-star2'>({props.stats.reviewCount}).{props.location}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='person'><b>from ${props.price}</b>/ person</p>
        </div>
    );
}