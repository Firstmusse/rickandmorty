import { useState, useEffect } from 'react'
import './RandomCharacters.css'
import React from 'react'
import {getRandomCharacter} from "../services/api";
import {Link} from "react-router-dom";

const RandomCharacters = () => {

    const [randomCharacters , setRandomCharacters] = useState([])
    const [randomCharacter , setRandomCharacter] = useState({})
    const [randomPage , setRandomPage ] = useState([])

    useEffect(()=>{
        getRandomCharacter().then((res)=>{
                 setRandomCharacters(res.data.results)
                 setRandomPage(res.randomPage)
        })
    },[])
     // console.log(randomPage)
    useEffect(()=>{
         if (randomCharacters.length) {
             const randomIndex = Math.floor(1 + Math.random() * randomCharacters.length)
             setRandomCharacter(randomCharacters[randomIndex])
         }
    },[randomCharacters])
    // console.log(randomCharacter)




    return (
        <div className='random-character-block'>
            <img src={randomCharacter?.image} />
           <div className='random-character-block-info'>
               <h4>{randomCharacter?.name}</h4>
                <p> <span>ID:</span> {randomCharacter?.id}</p>
               <p><span>Status:</span> {randomCharacter?.status}</p>
               <p><span>Species:</span> {randomCharacter?.species}</p>
               <Link
                     to={`/rickandmorty/character/${randomPage}/${randomCharacter?.id}`}
               >Learn more...
               </Link>
           </div>
        </div>
    )
}
export default RandomCharacters
