import React, {useEffect, useState} from 'react'
import axios from "axios";
import './Character.css'
import rightIcon from '../img/right-arrow.svg'
import leftIcon from '../img/right-arrow.svg'


import {getCharacters } from "../services/api";




const Character = () => {

    const [characters , setCharacters] = useState([]) // массив с персонажами 20шт
    const [pageCharacters, setPageCharacters] = useState([]) // ссылки на след и предыдущую страницу инфо о количестве:  1. Персонажей 2. Страниц
    const [mainPage, setMainPage] = useState(1)
    const [loading, setLoading] = useState(true) // состояние загрузки


    const nextPage = (mainPage) => {
        if(mainPage < pageCharacters.pages )
            setMainPage(mainPage+1)

    }

    const prevPage = (mainPage) => {
        if (mainPage > 1){
            setMainPage(mainPage-1)
        }
    }

    useEffect(() => {
        getCharacters(mainPage).then
        ((res) => {
            setCharacters(res.results)
            setLoading(res.loading)
            setPageCharacters(res.info)

        });

    }, [mainPage]);



    return (
        <>
            {loading ? ('Loading...') : (
                <>{

                }
                    <div className="count-page">
                        {characters.map((character, index) => (
                            <div key={index}
                                 className="person-card">
                                <span>{character.name}</span>
                                <img className="characters-img"
                                     src={character.image}
                                     alt={character.name} />

                            </div>
                        ))}
                    </div>
                    <div className="count-btn">
                        <button className='left-arrow'
                                onClick={() => prevPage(mainPage)}>

                            <img className='left-arrow-icon'
                                 src={leftIcon}
                                 alt='leftarrow'
                            />
                        </button>

                        <h3 className='active-page'>{mainPage}</h3>

                        <button className='right-arrow'
                                onClick={() => nextPage(mainPage)}>

                            <img className='right-arrow-icon'
                                 src={rightIcon}
                                 alt='rightarrow'
                            />
                        </button>


                    </div>
                </>
            )}
        </>

    )

}
export default Character


