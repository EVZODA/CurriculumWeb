import React from 'react'
import burgersvg from '../img/burguer.svg'
import { useEffect } from 'react'




const Burguer = (props) => {

  const {navbarBurguer} = props
    useEffect(() => {
        widht()
      }, [])

    const widht = () => {
        const burger = document.getElementsByClassName("burger")   
        if (window.innerWidth>768){
        burger[0].style.display= "none"
        }
    }
  return (
<img onClick={navbarBurguer} src={burgersvg} className='burger w-[50px]'/>
  )
}



export default Burguer