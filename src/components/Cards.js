import React from 'react'
import CardTextItem from './CardTextItem'
import './Cards.css';

function cards() {
    return (
        <div className='cards'>
        <h4> Data Driven Problem Solving </h4>
        <div className='cards__container'>
         <div className='cards__wrapper'>
         <ul className='cards__items'>
         <CardTextItem />
         <CardTextItem />
         </ul>  
         </div>
        </div> 
        </div>
    )
}

export default cards
