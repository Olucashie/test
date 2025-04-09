import React from 'react'

import Signup from "./pages/Signup"


import { Route, Routes} from 'react-router-dom'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'

const App = () => {
  

  return (
    <>
    
     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
     </Routes>
    </>
  )
}

export default App
