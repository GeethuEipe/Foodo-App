import { HiArchive, HiHeart } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

import { AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineMenuBook } from 'react-icons/md'
import React from 'react'

export const menuItems = [
  {
    icon: MdOutlineMenuBook,
    label: 'Recipes',
    href: '/'
  },
  {
    icon: HiHeart,
    label: 'Favourites',
    href: '/Favourites'
  },
  {
    icon: HiArchive,
    label: 'Courses',
    href: '/Courses'
  },
  {
    icon: AiOutlineGlobal,
    label: 'Community',
    href: '/Community'
  }
]

const MenuItem = ({ icon: Icon, label, href }) => {
  const currentLocation = useLocation()
  const isActive = currentLocation.pathname === href

  return (
    <li className="group flex gap-2 items-center">
      <Icon
        className={`text-black/50 group-hover:text-red-500 group-active:text-red-500 ${
          isActive ? 'text-red-500' : ''
        }`}
        size={23}
      />
      <Link
        to={href}
        className={`text-black/50 group-hover:text-black group-active:text-black ${
          isActive ? '!text-black' : ''
        }`}>
        {label}
      </Link>
    </li>
  )
}
export default MenuItem
