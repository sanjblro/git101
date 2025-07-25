import { useState } from 'react'
import './App.css'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import routes from './routes'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   <HashRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
  </HashRouter>
    </>
  )
}

export default App
