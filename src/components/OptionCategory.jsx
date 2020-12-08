import React from 'react'

export default function OptionCategory({changeGif, option}) {
    return (
        <div>
     <label>Select Category: </label>
    <select id = "dropdown" onChange={(e)=> changeGif(e.target.value)} value={option}>
    <option value="funny" >Funny</option>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="meme">Meme</option>
    <option value="christmas">Christmas</option>
    </select>
        </div>
    )
}

