import React, {useState, useEffect} from 'react'
import OptionCategory from './OptionCategory';
import SingleCard from './SingleCard';


export default function CardList() {

    let [gifList, setGifList] = useState([])
    let [option, setOption] = useState("funny");
    const API_KEY = process.env.REACT_APP_GIF_API_KEY;

        useEffect(()=> {
            if(localStorage.category){
                const category = JSON.parse(localStorage.category);
                setOption(category);
                console.log(category);
                fetchGifList()
            }
            else{
                localStorage.setItem("category", JSON.stringify(option))
                fetchGifList()
            }
        }, [option])
    
        const changeGif = (newGif) => {
            localStorage.setItem("category", JSON.stringify(newGif))
            setOption(newGif) 
          }
          function fetchGifList(){
            fetch(`https://api.giphy.com/v1/gifs/search?q=${option}&api_key=${API_KEY}&limit=24`)
            .then(res => res.json()) 
            .then(result => {
                console.log(result.data);
                setGifList(result.data)
            });	
            }

    return (
     <div className="container-wrapper">
     <div className="title-wrapper">
    <h1 className="title">{option && option} Gif</h1>
    <h2 className="sub-title">Advent Calendar</h2>
    </div>
        <OptionCategory option={option} changeGif={changeGif}/>
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
