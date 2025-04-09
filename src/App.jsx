import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from "./pages/Signup"
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
const App = () => {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </>
  )
}

export default App
