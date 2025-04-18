import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import NewsTicker from './NewsTicker'
import Footer from './Footer'
import ReturnToTop from './ReturnToTop'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <NewsTicker />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ReturnToTop />
    </div>
  )
}

export default Layout 