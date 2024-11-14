import React from 'react'
import landingAirport from '../assets/mestixaFull.png'
import spanish from '../assets/newEspanol.jpg'
import english from '../assets/newIngles.jpg'

const LandingAirport = () => {
  return (
    <div className=' flex justify-center relative'>
        <img className=' absolute max-sm:bottom-0 h-screen max-sm:h-5/6 max-sm:w-full max-sm:object-cover' src={landingAirport} alt="" />
        <div className=' flex flex-col items-center max-sm:pt-[23%] justify-center h-screen '>
            <a className='flex flex-col items-center z-10' href="/spanishport">
                <img className=' cursor-pointer max-sm:w-full w-1/3' src={spanish} alt="" />
            </a>
            <a className='flex flex-col items-center z-10' href="/englishport">
                <img className=' cursor-pointer max-sm:w-full w-1/3' src={english} alt="" />
            </a>
        </div>
    </div>
  )
}

export default LandingAirport