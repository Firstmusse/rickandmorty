import React, {useEffect, useState} from 'react'
import axios from "axios";

const Character = () => {
    const [characters , setCharacters] = useState([])
    console.log(characters)
    useEffect(()=>{
        axios
            .get("https://rickandmortyapi.com/api")
            .then(res => {
                setCharacters(Object.keys(res.data))
            })
    },[])
    return (
        <div>
            {characters}
        </div>
    )
}
export default Character


