import { FaFish, FaLeaf } from 'react-icons/fa'

import { GiRoastChicken } from 'react-icons/gi'
import React from 'react'

const RecipeIcon = ({ icon }) => {
  switch (icon) {
    case 'GiRoastChicken':
      return <GiRoastChicken size={28} />
    case 'FaFish':
      return <FaFish size={28} />
    case 'FaLeaf':
      return <FaLeaf size={28} />
    default:
      return null
  }
}

export default RecipeIcon
