import React, {useEffect, useState} from 'react'
import Search from '../Components/Search.jsx'
import { getCharacters } from '../services/api'
const MainPage = () => {
    const [mainPage, setMainPage] = useState(1)
    const [characters , setCharacters] = useState([]) // массив с персонажами 20шт
    const [pageCharacters, setPageCharacters] = useState([]) // ссылки на след и предыдущую страницу инфо о количестве:  1. Персонажей 2. Страниц
    const [loading, setLoading] = useState(true) // состояние загрузки

    useEffect(() => {
        getCharacters(mainPage).then
        ((res) => {
            setCharacters(res.results)
            setLoading(res.loading)
            setPageCharacters(res.info)

        });

    }, [mainPage]);

    return (
        <div>

            <h1 style={{textAlign: 'center'}}>Search characters</h1>
            <Search characters = {characters}/>
        </div>
    )
}
export default MainPage
