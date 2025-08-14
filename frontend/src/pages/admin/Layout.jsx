import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../component/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

 
  const {axios, setToken, navigate} = useAppContext();


  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common ['Authorization'] = null;
    setToken(null)
    navigate('/')
  }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px:12 border-b border-gray-200'>
        <img src={assets.logo} alt="" className='w-32 sm:w:40 cursor-pointer' onClick={() => navigate('/')} />

        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full  cursor-pointer'>
          Logout </button>
      </div>

      {/* Now we will create the sidebar-- 100vh = 100% of the viewport height (the full height of the browser window).

70px = A fixed pixel value (often the height of a navbar/header).

So, calc(100vh - 70px) = total screen height minus 70px. */}

      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />

        <Outlet />

      </div>

    </>

  )
}

export default Layout
