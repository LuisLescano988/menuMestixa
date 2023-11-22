import React from 'react'
import header from '../assets/header.jpg'
import espanol from '../assets/espanol.jpg'
import ingles from '../assets/ingles.jpg'
import footer from '../assets/footer.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-black h-screen'>
      <img src={header} />
      <div className=' flex flex-col z-20'>
        <button className=''>
          <NavLink to={'/spanish'}>
            <img src={espanol} />
          </NavLink>
        </button>
        <button>
          <NavLink to={'/english'}>
            <img src={ingles} />
          </NavLink>
        </button>
      </div>
      <img src={footer} className=' z-10 md:relative absolute bottom-0' />
    </div>
  )
}

export default Home