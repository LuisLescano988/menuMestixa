// import header from '../assets/header.jpg'
// import header2 from '../assets/header2.jpg'
// import espanol from '../assets/espanol.jpg'
// import ingles from '../assets/ingles.jpg'
// import footer from '../assets/footer.jpg'
// import footer2 from '../assets/footer2.jpg'
// import { NavLink } from 'react-router-dom'
// import full from '../assets/mestixaFull.jpg'
// import fullbg from "../assets/mestixaFull.png";
// import spang from "../assets/newEspanol.jpg";
// import eng from "../assets/newIngles.jpg";

// const Home = () => {
//   return (
// <div className=' flex flex-col items-center justify-end bg-black h-screen overflow-hidden'>
//   <img src={header} className=' lg:w-1/3 -mb-[0.2%]' />
//   <img src={header2} className=' lg:w-1/3' />
//   <div className=' flex flex-col lg:w-1/3'>
//     <button className=' -mb-[0.5%]'>
//       <NavLink to={'/spanish'}>
//         <img src={espanol} className=' lg:h-20 lg:w-full lg:object-contain' />
//       </NavLink>
//     </button>
//     <button>
//       <NavLink to={'/english'}>
//         <img src={ingles} className=' lg:h-20 lg:w-full lg:object-contain'/>
//       </NavLink>
//     </button>
//     <button className=''>
//       <NavLink to={'https://www.instagram.com/mestixarestaurant/'}>
//         <img src={footer} className='' />
//       </NavLink>
//     </button>
//   </div>
//   <img src={footer2} className=' lg:w-1/3 bottom-0' />
// </div>
//     <div className="flex relative justify-center h-screen z-0 bg-black ">
//       <img className=" lg:object-cover" src={fullbg} alt="" />
//       <div className="flex flex-col absolute h-1/5 top-[39%] ">
//         <img className=" z-10 h-[50%] w-auto " src={spang} alt="" />
//         <img className=" z-10 h-[50%] w-auto " src={eng} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import header from "../assets/header.jpg";
import header2 from "../assets/header2.jpg";
import espanol from "../assets/espanol.jpg";
import ingles from "../assets/ingles.jpg";
import footer from "../assets/footer.jpg";
import footer2 from "../assets/footer2.jpg";
import fullbg from "../assets/mestixaFull.png";
import spang from "../assets/newEspanol.jpg";
import eng from "../assets/newIngles.jpg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Función para actualizar el estado basado en el ancho de la pantalla
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 568); // 768px es el breakpoint md de Tailwind
  };

  // Efecto para verificar el tamaño inicial y añadir el listener
  useEffect(() => {
    checkScreenSize(); // Verificar tamaño inicial

    // Agregar event listener para cambios en el tamaño de pantalla
    window.addEventListener("resize", checkScreenSize);

    // Cleanup: remover event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Componente móvil
  const MobileView = () => (
    <div className="flex flex-col items-center justify-end bg-black h-screen overflow-hidden">
      <img src={header} className="w-full -mb-[0.2%]" />
      <img src={header2} className="w-full" />
      <div className="flex flex-col w-full">
        <button className="-mb-[0.5%]">
          <NavLink to="/spanish">
            <img src={espanol} className="w-full object-contain" />
          </NavLink>
        </button>
        <button>
          <NavLink to="/english">
            <img src={ingles} className="w-full object-contain" />
          </NavLink>
        </button>
        <button>
          <NavLink to="https://www.instagram.com/mestixarestaurant/">
            <img src={footer} />
          </NavLink>
        </button>
      </div>
      <img src={footer2} className="w-full bottom-0" />
    </div>
  );

  // Componente desktop
  const DesktopView = () => (
    <div className="flex relative justify-center h-screen z-0 bg-black">
      <img className="object-cover bg-black" src={fullbg} alt="" />
      <div className="flex flex-col absolute h-1/6 bg-black top-[39%]">
        <NavLink className="z-10 h-1/2 w-auto bg-black" to="/spanish">
          <img className=" h-[100%]" src={spang} alt="" />
        </NavLink>
        <NavLink className="z-10 h-1/2 w-auto" to="/english">
          <img className=" h-[100%]" src={eng} alt="" />
        </NavLink>
      </div>
    </div>
  );

  // Renderizar condicionalmente basado en el tamaño de pantalla
  return (
    <>
      {/* Vista Móvil - se muestra por defecto y se oculta en md */}
      <div className="block md:hidden">
        <MobileView />
      </div>
      
      {/* Vista Desktop - se oculta por defecto y se muestra en md */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </>
  );
};

export default Home;
