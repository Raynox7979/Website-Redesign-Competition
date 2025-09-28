import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App
