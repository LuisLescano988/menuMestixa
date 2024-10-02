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
    <div className=' flex flex-col items-center justify-end bg-black h-screen overflow-hidden'>
      <img src={header} className=' lg:w-1/3 -mb-[0.2%]' />
      <img src={header2} className=' lg:w-1/3' />
      <div className=' flex flex-col lg:w-1/3'>
        <button className=' -mb-[0.5%]'>
          <NavLink to={'/spanish'}>
            <img src={espanol} className=' lg:h-20 lg:w-full lg:object-contain' />
          </NavLink>
        </button>
        <button>
          <NavLink to={'/english'}>
            <img src={ingles} className=' lg:h-20 lg:w-full lg:object-contain'/>
          </NavLink>
        </button>
        <button className=''>
          <NavLink to={'https://www.instagram.com/mestixarestaurant/'}>
            <img src={footer} className='' />
          </NavLink>
        </button>
      </div>
      <img src={footer2} className=' lg:w-1/3 bottom-0' />
    </div>
  )
}

export default Home