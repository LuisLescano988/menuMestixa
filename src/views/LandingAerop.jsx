import React from 'react'
import landingAirport from '../assets/mestixaFull.png'
import spanish from '../assets/newEspanol.jpg'
import english from '../assets/newIngles.jpg'

const LandingAirport = () => {
  return (
    <div className=' flex justify-center relative'>
        <img className=' absolute h-screen' src={landingAirport} alt="" />
        <div className=' flex flex-col items-center justify-center h-screen '>
            <a className='flex flex-col items-center z-10' href="/spanishport">
                <img className=' cursor-pointer w-1/3' src={spanish} alt="" />
            </a>
            <a className='flex flex-col items-center z-10' href="/englishport">
                <img className=' cursor-pointer w-1/3' src={english} alt="" />
            </a>
        </div>
    </div>
  )
}

export default LandingAirport