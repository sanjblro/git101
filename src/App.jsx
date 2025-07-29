import { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';
import { AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

function AppWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <AppWrapper />
    </HashRouter>
  );
}

export default App;
