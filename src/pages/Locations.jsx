
import React, {useEffect, useState} from 'react'
import axios from "axios";

import './Locations.css'
import {getLocations} from "../services/api";
import leftIcon from "../img/right-arrow.svg";
import rightIcon from "../img/right-arrow.svg";
import LocationCard from "../Components/LocationCard";

const Locations = () => {

    const [mainPage, setMainPage] = useState(3)
    const [lastPage, setLastPage] = useState()
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(true) // состояние загрузки


    const nextPage = (mainPage) => {
        if(mainPage < lastPage )
            setMainPage(mainPage+1)
    }

    const prevPage = (mainPage) => {
        if (mainPage > 1){
            setMainPage(mainPage-1)
        }
    }

    useEffect(()=>{

        getLocations(mainPage).then(res => {

            setLocations(res.data)
            setLastPage(res.data.info.pages)
            setLoading(res.loading)
        })
    },[mainPage])

    return (
            <>{loading ? ('Loading...') : (
                <>{

                    <div className="location-container">

                        {locations.results?.map((item, i) => (
                                <LocationCard
                                    key={i}
                                    name ={item.name}
                                    type={item.type}
                                    createdData={item.created}
                                />

                        ))}

                    </div>

                }</>

            )}
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
            </>

    )
}
export default Locations
