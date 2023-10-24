import axios from "axios";

export const getCharacters = async (mainPage) =>{
    const action = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${mainPage}`

    );


    return {...action.data , loading: false}
}

export const getLocations = async (mainPage) =>{
    const action = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${mainPage}`
    )
    return {...action , loading: false}
}