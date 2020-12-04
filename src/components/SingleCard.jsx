import React from 'react'

export default function SingleCard({ props: {images, title }, number}) {
    return (


        <div>
            <p>{number +1 }</p>
            <p>{title}</p>
            <img src={images.original.url}/>
        </div>
    )
}
