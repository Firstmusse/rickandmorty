
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {CorrectNameEpisode} from "../utils/CorrectNameEpisode";
import './Episodes.css'
import leftIcon from "../img/right-arrow.svg";
import rightIcon from "../img/right-arrow.svg";

const Episodes = () => {

    const [mainPage, setMainPage] = useState(1)
    const [episode, setEpisode] = useState([])
    const [infoEpisode, setInfoEpisode] = useState([])


    const nextPage = (mainPage) => {
        if(mainPage < infoEpisode.pages )
            setMainPage(mainPage+1)
    }

    const prevPage = (mainPage) => {
        if (mainPage > 1){
            setMainPage(mainPage-1)
        }
    }

    useEffect(()=>{
        const getEpisode = async  () => {
            axios
                .get(`https://rickandmortyapi.com/api/episode?page=${mainPage}`)
                .then(res => {
                    setEpisode(res.data.results)
                    setInfoEpisode(res.data.info)
                })
        }
        getEpisode()
    },[mainPage])

    return (
        <div>

            {episode.map((item, index) => (
                <div className="episode-container" key={index}>
                    <h3>{item.name}</h3>
                    <span>
                        {CorrectNameEpisode(item.episode)}
                    </span>
                </div>
            ))}
            <div className="arrow-container">
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

        </div>
    )
}
export default Episodes
