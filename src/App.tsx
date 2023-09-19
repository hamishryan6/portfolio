import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Playground from './pages/Playground/Playground';
import Navigation from './components/Navigation/Navigation';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Context from './Context';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')


  return (
    <Context.Provider value={{ isModalOpen, setIsModalOpen, theme, setTheme }}>
      <Navigation />
      <ThemeToggle isVisible={!isModalOpen} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
