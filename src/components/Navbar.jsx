import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css'
export default function Navbar(){
    const [activeItem, setActiveItem] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(()=> {
      if(isMenuOpen){
        document.getElementById('navbar').className = 'navbar column';
      }
      else{
        document.getElementById('navbar').className = 'navbar';
      }
    },[isMenuOpen])
  
    return(
        <nav id='navbar'>
            <div id='logo' className='logo'>
            <img className='logoImage' src="Pokemon logo.png" alt="Pokemon logo" width={200} height={75}/>
            </div>
            <div id='navigation' className='navigation'>
            {isMenuOpen ? (
                <ul className='mobile-menu'>
                <div className='closing-icon'><p onClick={()=>setIsMenuOpen(false)}>x</p></div>
                <li>
                    <Link
                    to="/"
                    className={activeItem === 'home' ? 'navigation-item-active' : 'navigation-item'}
                    onClick={() => {
                        setActiveItem('home');
                        setIsMenuOpen(false);
                    }}
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    to="/pokemons"
                    className={activeItem === 'pokemons' ? 'navigation-item-active' : 'navigation-item'}
                    onClick={() => {
                        setActiveItem('pokemons');
                        setIsMenuOpen(false);
                    }}
                    >
                    Pokemon List
                    </Link>
                </li>
                <li>
                    <Link
                    to="/about"
                    className={activeItem === 'about' ? 'navigation-item-active' : 'navigation-item'}
                    onClick={() => {
                        setActiveItem('about');
                        setIsMenuOpen(false);
                    }}
                    >
                    About
                    </Link>
                </li>
                <li>
                    <Link
                    to="/contactus"
                    className={activeItem === 'contactus' ? 'navigation-item-active' : 'navigation-item'}
                    onClick={() => {
                        setActiveItem('contactus');
                        setIsMenuOpen(false);
                    }}
                    >
                    Contact us
                    </Link>
                </li>
                </ul>
            ) : (
                <div className='burger-menu' onClick={() => setIsMenuOpen(true)}>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                </div>
            )}
            <div className='desktop-menu'>
                <li>
                    <Link
                        to="/"
                        className={activeItem === 'home' ? 'navigation-item-active' : 'navigation-item'}
                        onClick={() => {
                        setActiveItem('home');
                        setIsMenuOpen(false);
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/pokemons"
                        className={activeItem === 'pokemons' ? 'navigation-item-active' : 'navigation-item'}
                        onClick={() => {
                        setActiveItem('pokemons');
                        setIsMenuOpen(false);
                        }}
                    >
                        Pokemon List
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={activeItem === 'about' ? 'navigation-item-active' : 'navigation-item'}
                        onClick={() => {
                        setActiveItem('about');
                        setIsMenuOpen(false);
                        }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contactus"
                        className={activeItem === 'contactus' ? 'navigation-item-active' : 'navigation-item'}
                        onClick={() => {
                        setActiveItem('contactus');
                        setIsMenuOpen(false);
                        }}
                    >
                        Contact us
                    </Link>
                </li>
            </div>
            </div>
        </nav>
  )
}