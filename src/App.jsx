import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/Page'

function App() {
  const [pokemons, setPokemons] = useState([]);

  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

  useEffect(() => {
    fetch(API_URL)
     .then(response => response.json())
     .then(data => setPokemons(data.results))
     .catch(error => console.error('Error:', error));
  },[] );


 console.log("PokeAPI Data", pokemons);

  return (
 
    <>
    <Page cards={pokemons}/>
    </>
  )
}

export default App
