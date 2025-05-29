import React from 'react'
import NaveBar from './components/NaveBar'
import { useLocation } from 'react-router-dom'

const App = () => {

  const isLocationPath = useLocation().pathname.includes("Owner")

  return (
    <div>
      {!isLocationPath && <NaveBar/>}
      
    </div>
  )
}

export default App