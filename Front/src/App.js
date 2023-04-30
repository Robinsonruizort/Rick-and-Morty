import './App.css'
import Cards from './components/Cards.component/Cards';
import Nav from "./components/Nav.component/Nav";
import About from './components/About.component/About';
import Detail from './components/Detail.component/Detail';
import { useState } from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Form from './components/Form.component/form';
import { useEffect } from 'react';
import Favorites from './components/Favorites.component/favorites';

function App () {
    const [characters, setCharacters] = useState([]);
    // const location = useLocation();
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    const username = "email@prueba.com";
    const password = "12345a";

    const login = (userData) => {
      if(userData.username === username && userData.password === password) {  
        setAccess(true)
        navigate("/home");
      }
    }

    const logOut = () => {
      setAccess(false)
      navigate("/")
    }

    useEffect(() => {
      !access && navigate('/')
    }, [access])

    const onSearch = (character) => {
      if(characters.find((repetido) => repetido.id == character)){
      return
      }
      if(character > 826){
        alert ("There is no character with this id");
        return;
      }
      // fetch(`https://rickandmortyapi.com/api/character/${character}`)
      fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
    }

    const onClose = (id) => {
      setCharacters(
        characters.filter(character => character.id !== id)
      )
    }

    const closeCards = () => {
      setCharacters([])
    }

    

  return (
    <div className='App' style={{ padding: '2px' }}>
      {useLocation().pathname === "/" ? <Form login={login}/> : <Nav  logOut={logOut}/>}
      <Routes>
        <Route path="home" element= {<Cards onSearch={onSearch} closeCards={closeCards} onClose={onClose} characters={characters}/>}> </Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="detail/:detailId" element={<Detail/>}></Route>
        <Route path="favorites" element={<Favorites/>}></Route>
      </Routes>
    </div>
  )
}

export default App
