import React, { useState } from 'react'

import MainPage from './pages/MainPage.js/MainPage';
import Header from './components/Header/Header'
import About from './pages/About/About';

import './App.css';


const App = () => {
  const [answer, setAnswer] = useState(() => [])
  const [isPage, setIsPage] = useState(true)

  return (
    <>
      <Header setAnswer={setAnswer} answer={answer} />
      {isPage ? <MainPage answer={answer} /> : <About />}
      <button onClick={() => setIsPage(prev => !prev)}>ONCLICK</button>
    </>
  )
}

export default App;
