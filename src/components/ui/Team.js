import Avatar from './Avatar'
import { FaPlus } from 'react-icons/fa'
import React from 'react'

const Team = () => {
  const avatarData = [
    {
      src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      size: 'h-6 w-6'
    },
    {
      src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      size: 'h-9 w-9'
    }
  ]

  return (
    <div className="mt-20 md:mt-28">
      <div className="flex items-center justify-center">
        {avatarData.map((avatar, index) => (
          <Avatar key={index} src={avatar.src} size={avatar.size} />
        ))}
        <div className="bg-red-600 h-6 w-6 rounded-full ring-2 ring-white flex items-center justify-center">
          <FaPlus className="text-white" />
        </div>
      </div>
      <p className="text-center text-sm font-medium">
        Create a team and <br /> take part in
        <a href="#" className="underline ml-1">
          TV show!
        </a>
      </p>
    </div>
  )
}

export default Team
