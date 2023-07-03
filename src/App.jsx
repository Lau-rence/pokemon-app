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

  return (
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
      <>
        <nav className='navbar'>
          <div className='pokeball-container'><img className='pokeball' src='pokeball.png' alt='pokeball'></img></div>
          <div className='logo'>
            <img className='logoImage' src="Pokemon logo.png" alt="Pokemon logo" />
          </div>
          <div className='navigation'>
            <li>
              <Link
                to="/"
                className={activeItem === 'home' ? 'navigation-item-active' : 'navigation-item'}
                onClick={() => setActiveItem('home')}
              >
                Pokemon List
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={activeItem === 'about' ? 'navigation-item-active' : 'navigation-item'}
                onClick={() => setActiveItem('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className={activeItem === 'contactus' ? 'navigation-item-active' : 'navigation-item'}
                onClick={() => setActiveItem('contactus')}
              >
                Contact us
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Pagination />} />
          <Route path='/About' element={<About />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
        <div className='footer'>
          <div className='footer-author'>
            <p>© LAURENCE - 2023</p>
          </div>
          <div className='footer-connect'>
          <p className='connect'>Connect with us: </p>
          <Link
            to="/ContactUs"
            onClick={() => setActiveItem('contactus')}
            className='here'>
            here
          </Link>
          </div>
          <div className='footer-accounts'>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Github</p>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
