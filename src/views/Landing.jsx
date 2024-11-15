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
  
  // Componente móvil
  const MobileView = () => (
    <div className="flex flex-col items-center justify-end bg-black h-[93vh] overflow-hidden">
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

  return (
    <>
      <div className="block lg:hidden">
        <MobileView />
      </div>
      
      <div className="hidden lg:block">
        <DesktopView />
      </div>
    </>
  );
};

export default Home;
