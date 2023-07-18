import { useEffect, useState } from 'react';
import axios from 'axios';
import './Information.css';
export default function Information({open, onClose, pokemon}){
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [evolution, setEvolution] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        if(open){
        setLoading(true)
        axios.get(url+pokemon).then((res)=>{
            axios.get(res.data.species.url).then((res)=>{
                axios.get(res.data.evolution_chain.url).then((res)=>{
                    setLoading(false)
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
            {loading? <div className='loading'><img className='pokeball' src='pokeball.png' alt='pokeball'></img></div>
            :
            evolution.map((ev)=>(
            <div 
              className='evolution-items' 
              key={ev} 
              style={{
                backgroundImage: `url('background-stand2.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'}}>
            <div className='name'><label>{capitalizeFirstLetter(ev)}</label></div>
            <div className='image-container'><img className='image' src={'./pokemons/' + ev + '.png'} alt={ev+ ' image'} /></div>
            </div>
            ))}
            </div> 
            <div className='button-container'><button onClick={()=> {
                onClose();
                setLoading(false)
                setEvolution([])
            }} className='pokemon-button-close'>Close</button></div>
        </div>
    </div>
)
}