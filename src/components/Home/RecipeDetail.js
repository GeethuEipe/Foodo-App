// src/components/ui/RecipeDetails.js
import React from 'react'
import RecipeIcon from '../ui/RecipeIcon'

const RecipeDetail = ({ time, kcal, type, icon }) => {
  const details = [
    { label: 'Min', value: time },
    { label: 'Kcal', value: kcal }
  ]

  return (
    <div className="mt-4 flex space-x-4 justify-between text-gray-700">
      {details.map((detail, index) => (
        <p key={index} className="border-r pr-4 text-2xl font-bold">
          {detail.value} <br />
          <span className="text-sm font-normal text-black/50">
            {detail.label}
          </span>
        </p>
      ))}
      <div className="flex flex-col gap-3">
        <RecipeIcon icon={icon} />
        <span className="text-black/50">{type}</span>
      </div>
    </div>
  )
}

export default RecipeDetail
