
import './App.css';
import React, {useState , useEffect} from 'react';
import {Routes, Route , useLocation } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import axios from "axios";


import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage"

import Character from "./pages/Character";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

const fullApi    = "https://rickandmortyapi.com/api"

const characters = "https://rickandmortyapi.com/api/character"

const episodes   = "https://rickandmortyapi.com/api/episode"


function App() {
    const location = useLocation();

    const [apiCategory , setApiCategory] = useState([])

    useEffect(()=>{
        axios
            .get(fullApi)
            .then(res => {
                setApiCategory(Object.keys(res.data))
            })
        console.log('Current location is ', location);
    },[])

  return (
      <div className='mainPage'>

        <NavBar  apiCategoryProps={apiCategory}/>

          <Routes>
              <Route path='/rickandmorty' element={<MainPage />} />
              <Route path='/rickandmorty/characters' element={<Character />} />
              <Route path='/rickandmorty/locations' element={<Locations />} />
              <Route path='/rickandmorty/episodes' element={<Episodes />} />
              <Route path='*' element={<NotFoundPage />} />

          </Routes>
      </div>

  );
}

export default App;