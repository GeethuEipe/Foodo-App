import LevelBadge from '../../components/ui/LevelBadge'
import React from 'react'
import RecipeIcon from '../../components/ui/RecipeIcon'

const RecipeDetails = ({ thambnail, title, level, time, kcal, type, icon }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-20 mb-10">
        <img className="h-96 w-96 rounded-md" src={thambnail} alt="img" />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
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
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
