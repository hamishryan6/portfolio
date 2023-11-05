import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Playground from './pages/Playground/Playground';
import Navigation from './components/Navigation/Navigation';
import Context from './Context';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<'Dark' | 'Light'>('Dark')


  return (
    <Context.Provider value={{ isModalOpen, setIsModalOpen, theme, setTheme }}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
