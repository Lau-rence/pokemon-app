import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom'
import Pagination from './Pagination'
import About from './About'
import ContactUs from './ContactUs'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
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
  return (
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
      <>
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
                    Pokemon List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
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
                    to="/ContactUs"
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
                  Pokemon List
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
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
                  to="/ContactUs"
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
        <Routes>
          <Route path='/' element={<Pagination />} />
          <Route path='/About' element={<About />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
        <div className='footer'>
          <div className='footer-author'>
            <p>© Laurence - 2023</p>
          </div>
          <div className='footer-connect'>
          <p className='connect'>Connect with us through: </p>
          <Link
            to="/ContactUs"
            onClick={() => setActiveItem('contactus')}
            className='here'>
            email
          </Link>
          </div>
          <div className='footer-accounts'>
            <a href='https://www.linkedin.com/in/laurence-santos-478a8a258/' target="_blank"><img className='icons' src='linkedin icon.png' alt='linkedin icon'></img></a>
            <a href='https://github.com/Lau-rence' target="_blank"><img className='icons' src='github icon2.png' alt='github icon'></img></a>
            <a href='https://www.facebook.com/Lorensssssssssssss' target="_blank"><img className='icons' src='facebook icon.png' alt='facebook icon'></img></a>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
