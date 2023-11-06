import React, {useEffect, useState, useMemo} from 'react'
import Search from '../Components/Search.jsx'
import {getCharacters, getRandomCharacter} from '../services/api'
import RandomCharacters from "../Components/RandomCharacters";
import './MainPage.css'



const MainPage = () => {
    const [mainPage, setMainPage] = useState(1)
    const [characters , setCharacters] = useState([]) // массив с персонажами 20шт
    const [pageCharacters, setPageCharacters] = useState([]) // ссылки на след и предыдущую страницу инфо о количестве:  1. Персонажей 2. Страниц
    const [loading, setLoading] = useState(true) // состояние загрузки
    const [lastPage , setLastPage] = useState(null) // последняя страница (42)

    const [randomCharacters, setRandomCharacters] = useState([])

    useEffect(() => {
        getCharacters(mainPage).then
        ((res) => {
            setCharacters(res.results)
            setLoading(res.loading)
            setPageCharacters(res.info)
            setLastPage(res.info.pages)

        });

        }, [mainPage]);




    return (
        <div className='search-main-block'>

            <Search characters = {characters}/>
            <RandomCharacters
                              allCharactersInfo = {pageCharacters}
                              randomCharacters = {randomCharacters}
            />

        </div>
    )
}
export default MainPage