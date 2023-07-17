import { useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import axios from 'axios'
import './Pokemons.css'

export default function Pokemons(){
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState('all');
  const [search, setSearch] = useState('')
  const [flag, setFlag] = useState(true);

  useEffect(()=>{
    setLoading(true);
    if(display == 'all'){
    let cancel;
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res)=>{
        setLoading(false);
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        setPokemon(res.data.results);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
    return () => cancel();
    }
    if(display == 'search'){
      let cancel;
      axios.get(currentPage +'/' + convertToLowerCase(search), {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res=>{
        setLoading(false)
        setPokemon(res.data.species);
      }).catch((error) => {
        console.error(error);
        setLoading(false);
      });
    }
  }, [currentPage, display, flag])

  function goToNextPage(){
    setCurrentPage(nextPage);
  }

  function goToPreviousPage(){
    setCurrentPage(previousPage);
  }

  function convertToLowerCase(inputString) {
    return inputString.toLowerCase();
  }

if(loading) return (<div className='loading'><img className='pokeball' src='pokeball.png' alt='pokeball'></img></div>)
return (
    <>
      <div className='search'>
        <div
          className='icon-container' 
          onClick={()=>setDisplay('all')}
        >
          <img 
            className='refresh-icon' 
            src='refresh.png' 
            alt='refresh icon'
          >
          </img>
        </div>
        <div 
          className='icon-container'
          onClick={()=> {
            setDisplay('search');
            setFlag(!flag);
        }}
        >
          <img 
            className='search-icon' 
            src='search.png' 
            alt='search icon'
          >
          </img>
        </div>
        <input
          className='searchbar'
          type='text' 
          placeholder='Search...'
          onChange={(e)=> setSearch(e.target.value)}
        ></input>
      </div> 
      <PokemonList pokemon={pokemon} display={display}/>
      <div className='btn-container'>
        {previousPage && <button onClick={()=>goToPreviousPage()}>Previous</button>}
        {nextPage && <button onClick={()=>goToNextPage()}>Next</button>}
      </div>
    </>
)
}