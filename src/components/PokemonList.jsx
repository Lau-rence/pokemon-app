import { useState } from "react"
import './PokemonList.css'
import Information from "./Information"
export default function PokemonList({pokemon}){
    const [openInfo, setOpenInfo] = useState(false)
    const [pokemonName, setPokemonName] = useState('')

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
return(
    <>
    <div className="container">
    {pokemon.map((p)=>(
        <div className="pokemon-info" onClick={()=> {
            setOpenInfo(true);
            setPokemonName(p.name);
            }}>
            <img className='pokemon-image'src={'./pokemons/'+ p.name + '.png'} alt={p.name + ' image'} />
            <div className="pokemon-name">
            <label key={p.name}>{capitalizeFirstLetter(p.name)}</label>
            </div>
        </div>
    )   
    )}
    </div>
    <Information open={openInfo} onClose={()=>{
        setOpenInfo(false);
        setPokemonName('');
        }} pokemon={pokemonName}></Information>
    </>
)
}