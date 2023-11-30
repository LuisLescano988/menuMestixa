import React from 'react'
import header from '../assets/header.jpg'
import header2 from '../assets/header2.jpg'
import espanol from '../assets/espanol.jpg'
import ingles from '../assets/ingles.jpg'
import footer from '../assets/footer.jpg'
import footer2 from '../assets/footer2.jpg'
import { NavLink } from 'react-router-dom'
// import full from '../assets/mestixaFull.jpg'

const Home = () => {
  return (
    <div className=' bg-white h-fit overflow-hidden'>
      <img src={header} />
      <img src={header2} />
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
      <img src={footer} className=' bottom-0' />
      <img src={footer2} className=' bottom-0' />
    </div>
  )
}

export default Home