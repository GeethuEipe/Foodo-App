import React from 'react'

const LevelBadge = ({ level }) => {
  let backgroundColor, textColor

  switch (level) {
    case 'Beginner':
      backgroundColor = 'rgba(187, 247, 208, 0.3)'
      textColor = '#166534'
      break
    case 'Intermediate':
      backgroundColor = 'rgba(254, 215, 170, 0.3)'
      textColor = '#d97706'
      break
    default:
      backgroundColor = 'rgba(254, 202, 202, 0.3)'
      textColor = '#dc2626'
      break
  }

  return (
    <span
      className="inline-block px-2 rounded"
      style={{ backgroundColor, color: textColor }}>
      {level}
    </span>
  )
}

export default LevelBadge
