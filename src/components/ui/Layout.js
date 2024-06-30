import Navbar from './Navbar'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <div className="bg-[#f87171] flex h-screen md:p-6">
    <Sidebar />
    <div className="flex-1 bg-[#fef2f2] md:rounded-r-3xl overflow-y-auto">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  </div>
)
export default Layout
