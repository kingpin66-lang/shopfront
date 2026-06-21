import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryAdmin from './backend/CategoryAdmin'
import Home from './frontend/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/dashboard' element={<CategoryAdmin />} />
      </Routes>
    </>
  )
}

export default App
