import React, {useEffect, useState} from 'react'

import {useParams} from "react-router-dom";

import {getCharacters} from "../services/api";


const CharacterInfo = () => {
    const [allInfoCharacters , setAllInfoCharacters] = useState([])
   const  {page , id} = useParams()


    useEffect(()=>{
        getCharacters(page).then((res)=>{
            setAllInfoCharacters(res.results)
        })

    },[page])


    const charactersInfo = allInfoCharacters.filter((elem)=>{
        return elem.id == id
    })

    // console.log(charactersInfo)

    return(
        <div className='info-block-character'>
            {charactersInfo.map((elem, i)=>{
                console.log(charactersInfo)
               return (
                   <div className='info-block-character-container'  key={i}>
                       <img src={elem.image}/>
                       <div className='info-block-character-text'>
                           <p>ID: {elem.id}</p>
                           <p>Name: {elem.name}</p>
                           <p>Gender: {elem.gender}</p>
                           <p>Status: {elem.status}</p>
                           <p>Species: {elem.species}</p>
                           <p>Location: {elem.location?.name}</p>
                           <p>Type: {elem.type.length ? elem.type : "Unknown"}</p>
                       </div>

                   </div>
               )
                })}
        </div>
    )

}
export default CharacterInfo
