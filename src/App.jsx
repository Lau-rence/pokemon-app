import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// components below
import RootLayout from './layout/RootLayout'
import Pokemons from './pages/Pokemons'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Pokemons />} />
      <Route path='lau-pokemon-app.netlify.app/about' element={<About />} />
      <Route path='lau-pokemon-app.netlify.app/contactus' element={<ContactUs />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
