import React from "react";
import reacticon from "../img/icons8-react.svg";
import Burguer from "./Burguer";
import {BiHomeAlt} from "react-icons/bi"
import {Link, NavLink} from "react-router-dom"



const goHome = () =>{
  window.scrollTo ({  top: 0,
   behavior: 'smooth'})
 }



const Navbar = () => {

  let drop = true;
  const dropdown = () => {
    const $dropdownitems = document.getElementsByClassName("dropdown-items");
    if (drop) {
      $dropdownitems[0].style.opacity = "1";
      $dropdownitems[0].style.pointerEvents = "all";
      $dropdownitems[0].style.transition = "all 5ms";
      drop = false;
    } else {
      $dropdownitems[0].style.opacity = "0";
      $dropdownitems[0].style.pointerEvents = "none";
      drop = true;
    }
  };

  let $navbaritems
  let navheight 
  let burguerdesplegable

  window.addEventListener("load", ()=> {
  $navbaritems = document.querySelectorAll(".navbar-items");
  navheight = $navbaritems[0].clientHeight
  burguerdesplegable = false
  navbarBurguer()
  })



  const navbarBurguer = () => {
    if (window.innerWidth < 768){
      if ( burguerdesplegable === false ){
        $navbaritems[0].style.height = navheight - navheight + "54px"
        $navbaritems[0].style.overflow = "hidden"
        burguerdesplegable = true
      } else {
        $navbaritems[0].style.height = navheight + 240 + "px"
        $navbaritems[0].style.overflow = "visible"
        burguerdesplegable = false
        $navbaritems[0].style.transition = "all 300ms"
      }
    }

  }

  return (
    <div className="navbar flex justify-between py-[30px] px-[20px] bg-[#8d4925] items-center fixed w-[100%] z-[50]">
      <div className="navbar-logo flex items-start">
        <button onClick={goHome}><BiHomeAlt className="text-[60px] text-white"/></button>
      </div>

      <div className="navbar-items flex flex-col md:flex md:flex-row items-center text-black md:space-x-10 space-y-2 text-xl w-[100%] md:w-[auto] text-white ">
      <Burguer navbarBurguer={navbarBurguer}></Burguer>
        <a href="#sectionData" className="hover:text-[#8d4925] hover:bg-[#f0ecec] p-[8px] rounded-[6px] text-white">Perfil personal/habilidades</a>
        <a href="#sectionExperience" className="hover:text-[#8d4925] hover:bg-[#f0ecec] p-[8px] rounded-[6px] text-white">Experiencia laboral</a>
        <a href="#sectionAcademic" className="hover:text-[#8d4925] hover:bg-[#f0ecec] p-[8px] rounded-[6px] text-white">Formacion Academica</a>
        <a href="#footer" className="hover:text-[#8d4925] hover:bg-[#f0ecec] p-[8px] rounded-[6px] text-white">Datos de Contacto</a>
        <a onClick={dropdown} className="dropdown relative hover:bg-[#f0ecec] flex justify-center hover:text-[#8d4925] p-[8px] rounded-[6px] text-white">
          Proximamente
          <div className="dropdown-items absolute flex flex-col bg-[#f0ecec] text-[#8d4925] px-[30px] md:right-0 w-[194px] mt-[28px] opacity-0 pointer-events-none top-[25px] rounded-[6px] shadow-lg border-t-[1px] border-black ">
            <a className="py-[10px]  p-[8px] rounded-[6px]">nuevas paginas</a>
            <a className="py-[10px]  p-[8px] rounded-[6px]">nuevas paginas</a>
            <a className="py-[10px]  p-[8px] rounded-[6px]">nuevas paginas</a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
