import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// components below
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path='/pokemons' element={<Pokemons/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
