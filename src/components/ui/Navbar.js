import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoMdSearch } from 'react-icons/io'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between items-center  gap-4 md:gap-0 py-7">
      <div className="flex items-center border-b-2  bg-transparent w-72 md:w-96">
        <IoMdSearch size={26} />
        <input
          type="text"
          placeholder="Enter your search request..."
          className="p-2 bg-transparent w-full outline-none"
        />
      </div>
      <div className="flex items-center gap-6">
        <GiForkKnifeSpoon size={26} />
        <button className="bg-red-500 text-white py-3 px-7 rounded-xl shadow-lg shadow-red-300">
          Go to Premium
        </button>
      </div>
    </div>
  )
}

export default Navbar
