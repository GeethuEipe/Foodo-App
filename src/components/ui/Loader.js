import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-48">
      <div className="animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="black">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
        </svg>
      </div>
    </div>
  )
}

export default Loader
