import React from 'react'
import NaveBar from './components/NaveBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const isLocationPath = useLocation().pathname.includes("Owner")

  return (
    <div>
      {!isLocationPath && <NaveBar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App