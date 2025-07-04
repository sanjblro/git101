import { useState } from 'react'
import './App.css'
import { BrowserRouter , NavLink, Routes ,Route} from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <BrowserRouter>
     <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
     </nav>
     <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/*' element={<Error />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
