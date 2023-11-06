import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import './NavBar.css'



const NavBar = ({apiCategoryProps}) => {
    const [apiLink , setApiLink] = useState([])

    useEffect(() => {
        setApiLink(apiCategoryProps)
    }, [apiCategoryProps])



    return (
        <div className='nav-bar' >
            <h1 className='logo-title'>Rick & Morty API</h1>
            <ul className="nav-list">
                <Link to="/rickandmorty">HOME</Link>
                {
                apiLink.map(elem =>
                        <Link key={elem}
                              to={`/rickandmorty/${elem}`}
                                        >{elem.toUpperCase()}
                        </Link>
                )

            }
            </ul>
        </div>
    )
}
export default NavBar
