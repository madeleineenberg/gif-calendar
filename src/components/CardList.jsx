import React, {useState, useEffect} from 'react'
import SingleCard from './SingleCard';


export default function CardList() {

    let [gifList, setGifList] = useState([])
    const apiKey = "Zurwe74dMp7o8yBFmftzXBPLzqHVRBNw";

    function fetchGifList(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=funny&api_key=${apiKey}&limit=24`)
        .then(res => res.json()) 
        .then(result => {
            console.log(result.data);
            setGifList(result.data)
        });	
        }

        useEffect(()=> {
            fetchGifList()
            console.log(gifList);
        }, [])

        

    return (
        <div className="container-wrapper">
            <h2 className="sub-title">Advent Calendar</h2>
            <div className="card-wrapper">
                {gifList && gifList.map((item, index) => {
                    return (
                        <div key={index}>
                        <SingleCard props={item} number={index}/> 
                        </div>      
                    )
                })}
            </div>
            
            
        </div>
    )
}
