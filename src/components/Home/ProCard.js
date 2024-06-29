import React from 'react'

const ProCard = () => {
  return (
    <div>
      <div className="bg-[#6ee7b7] rounded-xl shadow-md md:w-64 transform transition-transform hover:scale-105 relative group curso text-smr-pointer">
        <div className="p-4 text-white">
          <button className="bg-black text-white rounded-md px-2 py-1 text-sm mb-20">
            PRO
          </button>
          <h1 className="text-2xl mb-4">
            Mentorship <br /> Program
          </h1>
          <p>
            A mentor will track your progress and give you tips for faster
            cullnary growth.
          </p>
        </div>
        {/* <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white -translate-y-10 translate-x-32 md:translate-x-20"
          src="briyani.jpeg"
          alt="Profile"
        /> */}
      </div>
    </div>
  )
}

export default ProCard
