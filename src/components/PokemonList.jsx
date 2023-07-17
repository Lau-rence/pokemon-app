import { useState } from "react";
import './PokemonList.css';
import Information from "./Information";

export default function PokemonList({ pokemon, display }) {
  const [openInfo, setOpenInfo] = useState(false);
  const [pokemonName, setPokemonName] = useState('');

  function capitalizeFirstLetter(str) {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  }

  return (
    <>
      <div className="container">
        {Array.isArray(pokemon)?(
          display === 'all' ? (
            pokemon.map((p) => (
              <div className="pokemon-info" onClick={() => {
                setOpenInfo(true);
                setPokemonName(p.name);
              }}>
                <img className='pokemon-image' src={'./pokemons/' + p.name + '.png'} alt={p.name + ' image'} />
                <div className="pokemon-name">
                  <label key={p.name}>{capitalizeFirstLetter(p.name)}</label>
                </div>
              </div>
            ))
          ) : (
            <div className="pokemon-info" onClick={() => {
              setOpenInfo(true);
              setPokemonName(pokemon.name);
            }}>
              <img className='pokemon-image' src={'./pokemons/' + pokemon.name + '.png'} alt={pokemon.name + ' image'} />
              <div className="pokemon-name">
                <label key={pokemon.name}>{capitalizeFirstLetter(pokemon.name)}</label>
              </div>
            </div>
          )
        ) : (
            <div className="pokemon-info" onClick={() => {
              setOpenInfo(true);
              setPokemonName(pokemon.name);
            }}>
              <img className='pokemon-image' src={'./pokemons/' + pokemon.name + '.png'} alt={pokemon.name + ' image'} />
              <div className="pokemon-name">
                <label key={pokemon.name}>{capitalizeFirstLetter(pokemon.name)}</label>
              </div>
            </div>
          )}
      </div>
      <Information open={openInfo} onClose={() => {
        setOpenInfo(false);
        setPokemonName('');
      }} pokemon={pokemonName}></Information>
    </>
  );
}
