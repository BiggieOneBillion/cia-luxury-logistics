import React from 'react'

const HeroSection2 = ({title, section}) => {
  return (
    <div className="fleet-hero-section flex flex-col justify-center mt-[15vh] md:mt-[8vh] lg:mt-[5vh] h-[35vh] lg:h-[55vh] px-2 lg:px-24 gap-4">
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='font-medium '>Home / <span className='text-primaryYellow'>{section}</span></p>
    </div>
  )
}

export default HeroSection2