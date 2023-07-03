import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'
import './Pagination.css'

export default function Pagination(){
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res)=>{
        setPokemon(res.data.results);
    }, [])
  })

return (
    <>
      <PokemonList pokemon={pokemon} />
      <div className='btn-container'>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
)
}