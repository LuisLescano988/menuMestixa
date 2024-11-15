// import first from '../assets/menuEngAirp.png';
import menu from '../assets/menuEng.pdf'


function EnglishAirport() {
  return (
    <div className=' bg-black'>
      {/* <img className=' w-screen' src={first} alt="" /> */}
      <object className='' data={menu} type="application/pdf"></object>
    </div>
  )
}

export default EnglishAirport