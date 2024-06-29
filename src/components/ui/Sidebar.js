import MenuItem, { menuItems } from './MenuItem'
import React, { useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { BsPersonFillAdd } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import Team from './Team'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-4 left-4 md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>
      <div
        className={`flex flex-col items-center inset-y-0 left-0 transform ${
          isOpen ? 'fixed translate-x-0' : 'fixed -translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-white p-6 md:rounded-l-3xl w-52 md:w-56 z-40`}>
        <a href="/" className="text-2xl font-bold mb-10 mt-6 md:mt-0">
          Foodoo
        </a>
        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-black"
          src="/images/profile.jpeg"
          alt="Profile"
        />
        <h2 className="mt-4 md:text-xl font-bold font-ribeye">
          Kristin Watson
        </h2>
        <p className="text-gray-500">Chef de Partie</p>
        <p className="flex items-center gap-1 bg-white rounded-full shadow-lg  text-center px-3 py-1 mb-20">
          <BsPersonFillAdd style={{ color: 'red' }} />
          37
        </p>
        <ul className="flex flex-col gap-2 md:text-lg">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </ul>
        <Team />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}></div>
      )}
    </>
  )
}
export default Sidebar
