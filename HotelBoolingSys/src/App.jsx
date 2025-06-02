import React from 'react'
import NaveBar from './components/NaveBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'

const App = () => {

  const isLocationPath = useLocation().pathname.includes("Owner")

  return (
    <div>
      {!isLocationPath && <NaveBar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App