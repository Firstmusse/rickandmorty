import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WebIcon from '@mui/icons-material/Web';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './NavBar.css'



const NavBar = ({apiCategoryProps}) => {
    const [apiLink , setApiLink] = useState([])

    useEffect(() => {
        setApiLink(apiCategoryProps)
    }, [apiCategoryProps])



    return (
        <div className='nav-bar' >
            <ul className="listId">
                <div className='btn-home'>
                    <Link to="/">Home</Link>
                </div>
                {
                apiLink.map(elem =>
                <a href={elem} key={elem}>{elem}</a>)
            }
            </ul>
        </div>
    )
}
export default NavBar
