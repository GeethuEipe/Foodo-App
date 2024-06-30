import React from 'react'

const ProCard = () => {
  return (
    <div>
      <div className="bg-[#5F8575] rounded-xl shadow-md md:w-60 transform transition-transform hover:scale-105 relative group curso text-smr-pointer h-full cursor-pointer">
        {/* <div className="absolute">
          <img
            className="object-cover -translate-y-1/3 ml-32"
            src="/images/shef-preview.png"
            alt="Profile"
          />
        </div> */}
        <div className="p-4 text-white">
          <button className="bg-black text-white rounded-md px-2 py-1 text-sm mb-20">
            PRO
          </button>
          <h1 className="text-2xl mb-4 font-ribeye">
            Mentorship <br /> Program
          </h1>
          <p className="w-5/6">
            A mentor will track your progress and give you tips for faster
            cullnary growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProCard
