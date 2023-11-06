import React, { useEffect, useState } from 'react'
import'./Search.css'
import CloseIcon from '../img/close.png'
import PersonIcon from '../img/personIcon.png'

const Search = ({characters}) => {

    const [change, setChange] = useState('')
    const [activeSearch , setActiveSearch] = useState(false)

    const handleChange = (value) =>{

        setChange(value)

        if (value.length > 0){
            setActiveSearch(true)
        }else{
            setActiveSearch(false)
        }
    }

    const handleClick = () => {
        setActiveSearch(false)
        setChange('')
    }
    const search = characters?.filter((item)=>{
        return item?.id >= Number(change) ||
               item.name?.toLowerCase().includes(change.toLowerCase())
    })

    return (


            <div className="search-container">
                <div className='search-block'>

                    <input
                        value={change}
                        onChange={(e)=> handleChange(e.target.value)}
                        className='search'
                        placeholder='Enter name character (Rick , Morty...)'
                    />
                    <div className='search-result-block'>

                        {activeSearch ?
                            (<>{search.map((item, index)=>{
                                return(
                                    <div className='search-card' key={index}>
                                        <span>ID : {item.id}</span>
                                        <img src={item.image}/>
                                        <h4>{item.name}</h4>
                                    </div>
                                )
                            })}</>):
                            ('')
                        }

                    </div>
                    <div className='delete-block'>{change?
                        <img className="delete-search-text"
                             onClick={()=> handleClick()}
                             src={CloseIcon}/>
                        : ''}</div>


                    <button
                        className='search-btn'
                    >No name</button>
                    <div className='characters-block'>
                        <img src={PersonIcon} />
                        <p>Oluwatobi</p>
                    </div>


                </div>


            </div>

    )
}
export default Search
