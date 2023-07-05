import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'
import './Pagination.css'

export default function Pagination(){
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    let cancel;
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res)=>{
        setLoading(false);
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        console.log(res.data.previous)
        setPokemon(res.data.results);
    })
    return () => cancel();
  }, [currentPage])

  function goToNextPage(){
    setCurrentPage(nextPage);
  }

  function goToPreviousPage(){
    setCurrentPage(previousPage);
  }

if(loading) return (<div className='loading'><img className='pokeball' src='pokeball.png' alt='pokeball'></img></div>)
return (
    <>
      <div className='search'>
        <div className='search-icon-container'><img className='search-icon' src='search.png' alt='search icon'></img></div>
        <input className='searchbar'type='text' placeholder='Search...'></input>
      </div> 
      <PokemonList pokemon={pokemon} />
      <div className='btn-container'>
        {previousPage && <button onClick={()=>goToPreviousPage()}>Previous</button>}
        {nextPage && <button onClick={()=>goToNextPage()}>Next</button>}
      </div>
    </>
)
}