import { useEffect, useState } from 'react'
import'./Search.css'

const Search = ({characters}) => {

    const [change, setChange] = useState('')

    const handleChange = (event) =>{

        setChange(event)
    }
    const search = characters?.filter((item)=>{

        return item?.id >= Number(change) ||
               item.name?.toLowerCase().includes(change.toLowerCase())


    })
    return (

        <div>
            <div className="search-container">
                <div className='search-block'>
                    <input
                        onChange={(e)=> handleChange(e.target.value)}
                        className='search'
                        placeholder='Введите название'
                    />
                    <button
                        className='search-btn'

                    >Поиск</button>
                </div>
                <div className='search-result-block'>
                {search.map((item, index)=>{
                    return(
                        <div className='search-card' key={index}>
                              <span>ID : {item.id}</span>
                                <img src={item.image}/>
                              <h4>{item.name}</h4>
                          </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Search
