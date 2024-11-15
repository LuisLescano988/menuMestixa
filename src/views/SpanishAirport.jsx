// import first from '../assets/menuSpaAir.png';
import menu from '../assets/menuEsp.pdf'

function SpanishAirport() {

    return (
        <div className=' bg-black w-screen'>
            {/* <img className=' w-screen' src={first} alt="" /> */}
            <object className='' data={menu} type="application/pdf"></object>
        </div>
    )
}

export default SpanishAirport