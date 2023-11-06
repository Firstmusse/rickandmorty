import axios from "axios";


export const getCharacters = async (mainPage = 1) =>{
    const action = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${mainPage}`
    );

    return {...action.data , loading: false }
}

export const getLocations = async (mainPage) =>{
    const action = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${mainPage}`
    )
    return {...action , loading: false}
}

export const getRandomCharacter = async  () =>{

    const characters = await getCharacters()

    const randomPage = Math.floor(1 + Math.random() * characters.info.pages)

    const result = await axios.get(`
         https://rickandmortyapi.com/api/character?page=${randomPage}
    `)

    return {...result , randomPage }

}
