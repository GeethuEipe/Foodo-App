import Navbar from './Navbar'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 bg-[#fef2f2] md:rounded-r-3xl overflow-y-scroll h-screen md:h-[780px]">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  </div>
)
export default Layout
