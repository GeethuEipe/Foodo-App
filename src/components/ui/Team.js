import Avatar from './Avatar'
import { FaPlus } from 'react-icons/fa'
import React from 'react'

const Team = () => {
  const avatarData = [
    {
      src: '/images/person1.jpeg',
      size: 'h-6 w-6'
    },
    {
      src: '/images/person2.jpeg',
      size: 'h-9 w-9'
    }
  ]

  return (
    <div className="flex flex-col mb-2 mt-16 md:mt-28">
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
