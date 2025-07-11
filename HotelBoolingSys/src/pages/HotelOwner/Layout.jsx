import React from 'react'
import NaveBarx from '../../components/HotelOwner/NaveBarx'
import SideBar from '../../components/HotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <NaveBarx/>
        <div className='flex h-full'>
            <SideBar/>
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default Layout