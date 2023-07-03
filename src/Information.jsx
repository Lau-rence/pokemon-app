import { useEffect, useState } from 'react';
import axios from 'axios';
import './Information.css';
export default function Information({open, onClose, pokemon}){
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [evolution, setEvolution] = useState([]);
    useEffect(()=>{
        if(open=true){
        axios.get(url+pokemon).then((res)=>{
            axios.get(res.data.species.url).then((res)=>{
                axios.get(res.data.evolution_chain.url).then((res)=>{
                    const newEvolution = [...evolution, 
                        res.data.chain.species.name, 
                        res.data.chain.evolves_to[0].species.name
                    ];
                    if (res.data.chain.evolves_to[0].evolves_to[0]?.species.name !== undefined) {
                        newEvolution.push(res.data.chain.evolves_to[0].evolves_to[0].species.name);
                      }
                    setEvolution(newEvolution);
                })
            })
        })}
    },[open, pokemon])

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

if (!open) return null;
return (
    <div className="info-container">
        <div className='information'>
            <div>
                <img className='pokemon-logo' src='Pokemon logo.png' alt='pokemon logo'></img>
            </div>
            <div className='evolution-container'>
            {evolution.map((ev)=>(
            <div className='evolution-items'>
            <div className='name'><label>{capitalizeFirstLetter(ev)}</label></div>
            <div className='image-container'><img className='image' src={ev + '.png'} alt={ev+ ' image'} /></div>
            </div>
            ))}
            </div>   
            <div className='button-container'><button onClick={()=> {
                onClose();
                setEvolution([])
            }} className='pokemon-button-close'>Close</button></div>
        </div>
    </div>
)
}