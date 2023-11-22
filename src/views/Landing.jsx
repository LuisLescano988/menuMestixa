import React from 'react'
import header from '../assets/header.jpg'
import español from '../assets/español.jpg'
import ingles from '../assets/ingles.jpg'
import footer from '../assets/footer.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-black'>
      <img src={header} />
      <button className=' m-0 p-0'>
        <NavLink to={'/spanish'}>
          <img src={español} />
        </NavLink>
      </button>
      <button>
        <NavLink to={'/english'}>
          <img src={ingles} />
        </NavLink>
      </button>
      <img src={footer} />
    </div>
  )
}

export default Home