//Packages
import { useState, useEffect } from 'react'
import axios from 'axios'

//Components and styles
import PokemonList from './PokemonList'
import './Pokemons.css'

const PokemonsInfo = () => {
    
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState('all');
  const [search, setSearch] = useState('')
  const [flag, setFlag] = useState(true);
  const [error, setError] = useState('');

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
      setLoading(false);
    });
    return () => cancel();
    }
    else if(display == 'search'){
      let cancel;
      axios.get('https://pokeapi.co/api/v2/pokemon/' + convertToLowerCase(search), {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res=>{
        setLoading(false)
        setPokemon(res.data.species);
      }).catch((error) => {
        setError(error.response.data);
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
            onClick={()=>{
                setDisplay('all');
                setError('');
            }}
            
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
                if(search==''){
                setError('empty search')
                } else {
                setDisplay('search');
                setFlag(!flag);
                setError('');
                }
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
        {error === '' ? <PokemonList pokemon={pokemon} display={display}/> : <div className='error-container'><p>There is no pokemon with a name '{search}'</p></div>} 
        <div className='btn-container'>
            {display === 'all'? previousPage && <button onClick={()=>goToPreviousPage()}>Previous</button> : null}
            {display === 'all'? nextPage && <button onClick={()=>goToNextPage()}>Next</button> : null}
        </div>
      </>
     );
}
 
export default PokemonsInfo;