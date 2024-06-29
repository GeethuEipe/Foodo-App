import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8 mb-0 md:mb-8">
      <div className="flex gap-2 md:gap-4 items-center md:mb-16 px-3 md:px-0">
        <img
          className="inline-block h-24 w-24 rounded-full ring-2 ring-[#f59e0b]"
          src="/images/foodoLogo.png"
          alt="Profile"
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-4xl font-bold mb-2 font-ribeye">
            {`Only the best recipes!`}
          </h1>
          <p className="text-black/50 text-sm md:text-lg">
            {`Today's new recipes for you`}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-20 mt-4 md:mt-0">
        <div className="border-r border-gray-300 pr-4 md:h-16">
          <h1 className="text-xl md:text-4xl font-bold mb-1 font-ribeye">
            168
          </h1>
          <p className="text-black/50">Tutorials</p>
        </div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold mb-1 font-ribeye">
            304
          </h1>
          <p className="text-black/50">Recipes</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
