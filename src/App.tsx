import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Playground from './pages/Playground/Playground';
import Navigation from './components/Navigation/Navigation';
import Context from './Context';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<'Dark' | 'Light'>('Dark')

  const observeElement = (observer: IntersectionObserver, className: string) => { 
    const elements = document.querySelectorAll(className)

    elements.forEach(element => {
      observer.observe(element)
    })
  }

  const revealObservedElements = (className: string, threshold: number, offset?: string) => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('show', entry.isIntersecting)
          if (entry.isIntersecting) observer.unobserve(entry.target)
        })
      },
      {
        threshold: threshold ?? 0,
        rootMargin: offset ? `0px 0px ${offset} 0px` : '0px'
       }
    )

      observeElement(observer, className)
  }

  return (
    <Context.Provider value={{ isModalOpen, setIsModalOpen, theme, setTheme, revealObservedElements }}>
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
