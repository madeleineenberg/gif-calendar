import React from 'react'
import FlipCard from './FlipCard';

export default function SingleCard({ props: {images, title }, number}) {
    return (


        <FlipCard number={number}> 
            <div className="card-front">
            <div className="circle">
            <h2>{number +1 }</h2>
            </div>
            </div>
            <div className="card-back">
            <h3>{title}</h3>
            <div className="img-wrapper">
            <img src={images.downsized_medium.url}/>
            </div>
            </div>
        </FlipCard>
    )
}
