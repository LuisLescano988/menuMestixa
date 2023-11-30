import React from 'react'
import header from '../assets/header.jpg'
import espanol from '../assets/espanol.jpg'
import ingles from '../assets/ingles.jpg'
import footer from '../assets/footer.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-white overflow-hidden bottom-0'>
      <img src={header} />
      <div className=' flex flex-col '>
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
      <img src={footer} className=' md:relative absolute bottom-0 -my-20 p-0' />
    </div>
  )
}

export default Home