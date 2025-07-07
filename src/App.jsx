import { useState } from 'react'
import './App.css'
import { BrowserRouter , NavLink, Routes ,Route} from 'react-router-dom'

import routes from './routes'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
