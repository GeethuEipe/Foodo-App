import './App.css'

import { Route, Routes } from 'react-router-dom'

import Community from './pages/Community'
import Courses from './pages/Courses'
import DetailPage from './pages/DetailPage'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import React from 'react'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
    </>
  )
}

export default App
