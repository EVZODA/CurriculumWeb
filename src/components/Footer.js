import React from 'react'
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs"; //Ant Design Icons
import {FaReact} from "react-icons/fa"
import {BiHomeAlt} from "react-icons/bi"

const goHome = () =>{
 window.scrollTo ({  top: 0,
  behavior: 'smooth'})
}

const Footer = () => {
  return (
   <div className='footer-container h-[400px] md:h-[300px] grid grid-cols-1 justify-items-center items-center bg-[#8d4925] md:grid-cols-2 md:items-center'>
    <button onClick={goHome} className='footer-logo '><BiHomeAlt className='text-[80px] text-white'/></button>
    <div className='footer-links grid grid-cols-2 md:grid-cols-4'>
      <a href='https://www.instagram.com/enzogiacoia/' target="blank" className='py-[30px] md:py-[0px]'><BsInstagram className='text-[80px] text-white'/></a>
      <a href='https://walink.co/9496ed' target="blank" className='py-[30px] md:py-[0px]'><BsWhatsapp className='text-[80px] text-white'/></a>
      <a href='https://github.com/EVZODA' target="blank"><BsGithub className='text-[80px] text-white'/></a>
      <a href='https://www.linkedin.com/in/enzo-giacoia-gonzalez-86bb5a234/' target="blank" className='pr-[25px]'><BsLinkedin className='text-[80px] text-white'/></a>
    </div>
   </div>
  )
}

export default Footer