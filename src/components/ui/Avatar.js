import React from 'react'

const Avatar = ({ src, size }) => {
  return (
    <img
      className={`inline-block rounded-full ring-2 ring-white ${size}`}
      src={src}
      alt=""
    />
  )
}

export default Avatar
