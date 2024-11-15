import React from 'react'
import landingAirport from '../assets/mestixaFull.png'
import header from '../assets/headermerged.png'
import footer from '../assets/footermerged.png'
import spanish from '../assets/newEspanol.jpg'
import english from '../assets/newIngles.jpg'


const LandingAirport = () => {
    const MobileView = () => (
        <div className=' flex justify-center fixed h-[93vh]'>
            <img className=' absolute max-sm:top-0 h-screen max-sm:h-[45%] max-sm:w-full max-sm:object-cover' src={header} alt="" />
            <img className=' absolute max-sm:bottom-0 h-screen max-sm:h-[39%] max-sm:w-full max-sm:object-cover' src={footer} alt="" />
            <div className=' flex flex-col items-center max-sm:pt-[23%] justify-center h-screen '>
                <a className='flex flex-col items-center z-10' href="/spanishport">
                    <img className=' cursor-pointer max-sm:w-full w-1/3' src={spanish} alt="" />
                </a>
                <a className='flex flex-col items-center z-10' href="/englishport">
                    <img className=' cursor-pointer max-sm:w-full w-1/3' src={english} alt="" />
                </a>
            </div>
        </div>
    );

    // Componente desktop
    const DesktopView = () => (
        <div className=' flex justify-center relative'>
            <img className=' absolute max-sm:bottom-0 h-screen max-sm:h-[88%] max-sm:w-full max-sm:object-cover' src={landingAirport} alt="" />
            <div className=' flex flex-col items-center max-sm:pt-[23%] justify-center h-screen '>
                <a className='flex flex-col items-center z-10' href="/spanishport">
                    <img className=' cursor-pointer max-sm:w-full w-1/3' src={spanish} alt="" />
                </a>
                <a className='flex flex-col items-center z-10' href="/englishport">
                    <img className=' cursor-pointer max-sm:w-full w-1/3' src={english} alt="" />
                </a>
            </div>
        </div>
    );

    return (
        <>
            <div className="block md:hidden">
                <MobileView />
            </div>

            <div className="hidden md:block">
                <DesktopView />
            </div>
        </>
    );
};

export default LandingAirport