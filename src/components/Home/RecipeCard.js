import React, { useCallback, useState } from 'react'

import { FaStar } from 'react-icons/fa'
import LevelBadge from '../../components/ui/LevelBadge'
import RecipeIcon from '../../components/ui/RecipeIcon'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({
  id,
  thambnail,
  title,
  level,
  time,
  kcal,
  type,
  icon
}) => {
  const [rating, setRating] = useState(0)
  const handleStarClick = useCallback(starIndex => {
    setRating(starIndex + 1)
  }, [])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/DetailPage/${id}`, {
      state: { thambnail, title, level, time, kcal, type, icon, rating }
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-md w-full md:w-60 transform transition-transform hover:scale-105 relative group">
      <img
        className="inline-block h-20 w-20 rounded-full ring-2 ring-white -translate-y-10 translate-x-32 md:translate-x-20"
        src={thambnail}
        alt="Profile"
      />
      <div className="flex flex-col items-center p-4 -mt-8">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <LevelBadge level={level} />
        <div className="mt-4 flex space-x-4 justify-between text-gray-700">
          <p className="border-r pr-4 text-2xl font-bold">
            {time} <br />
            <span className="text-sm font-normal text-black/50">Min</span>
          </p>
          <p className="border-r pr-4 text-2xl font-bold">
            {kcal} <br />
            <span className="text-sm font-normal text-black/50">Kcal</span>
          </p>
          <div className="flex flex-col gap-3">
            <RecipeIcon icon={icon} />
            <span className="text-black/50">{type}</span>
          </div>
        </div>
        <li className="flex gap-2 items-center mt-8 cursor-pointer">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              onClick={() => handleStarClick(index)}
              className={index < rating ? 'text-red-600' : 'text-[#fecaca]'}
            />
          ))}
        </li>
      </div>
      <div
        onClick={handleClick}
        className="mt-3 bg-white text-black text-center py-4 px-4 w-full rounded-b-xl border-t group-hover:bg-red-500 group-hover:text-white transition-shadow group-hover:shadow-lg group-hover:shadow-red-300 font-medium cursor-pointer">
        Start cooking
      </div>
    </div>
  )
}
export default RecipeCard
