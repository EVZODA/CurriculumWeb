import React from 'react'
import { useState, useEffect } from 'react'
import Pencil from './Pencil.js'

const SectionAcademic = () => {

  useEffect(() => {
  let carrousell = setInterval(() => {
        setCarrousel(prevcarrousel => prevcarrousel<1?prevcarrousel+1:0)
     }, 14000);
  
  // control de la animacion del carrousel
  let animationToggle = setInterval(() => {
      setAnimationCarrousel(prevanimationcarrousel => prevanimationcarrousel<3?prevanimationcarrousel+1:0)
    }, 7000);

    return () => {
      clearInterval(carrousell)
      clearInterval(animationToggle)
    }
  }, [])
  
useEffect(() => {
  
  

}, [])


  const informacionacademica = {
    infoprimary: [
      `Escuela Número 6 , Año 2006 - Año 2011`, 
      ` Nivel primario: Completo.`,

    ],

    infoSecondary:[
      "Colegio secundario 9 De Julio , Ciencias Sociales / 2012 - 2017",
      "Nivel Secundario: Completo.",
      "Beca del Rotary.",
    ],

    infoUniversity:[
      "Universidad NACIONAL DE LA PAMPA.", 
      "Exactas y Naturales | 2018 - 2022",
      "Nivel Universitario: Completo.",
      "Beca Progresar.",
      "Beca del Banco de La Pampa.",
      "Beca del Rotary.",
      "Pasantía - IPAV -.",
    ]
  }

  const [animationCarrousel, setAnimationCarrousel] = useState(0)

  const [carrousel, setCarrousel] = useState(0)


  
  

  useEffect(() => {
  
  }, [])

  

  return (
    <div className='h-[100vh] text-center flex justify-center items-center bg-[#eee]'>
    <div className='carrousel relative w-[100%] h-[700px] flex items-center overflow-hidden'>
      <div className={`div-img-container w-[100%] justify-around absolute sm:space-x-10 space-y-10 sm:space-y-0 flex sm:flex-row items-center flex-col ${carrousel===0?"opacity-1 right-0":"-right-[150px] opacity-0"}`}>
        <div className='sm:w-[40%] sm:h-[320px] w-[70%] h-[300px] bg-[#8d4925] text-white rounded-[8px] flex flex-col justify-center items-center z-[1]'> 
        <Pencil number={0} setAnimationCarrousel={setAnimationCarrousel} animationCarrousel={animationCarrousel}></Pencil> 
       {informacionacademica.infoprimary.map((element, index) => {
return <p className={`infoacademyPrimary transition-[opacity] duration-[2500ms] opacity-0 ${animationCarrousel===0? "animate-[transitionOpacity_7000ms_ease-in-out_infinite]":""}`} key={index}>{element}</p>
       })}
        </div>
        <div className='sm:w-[40%] sm:h-[320px] w-[70%] h-[300px] bg-[#8d4925] text-white  rounded-[8px] flex flex-col justify-center items-center z-[1]'>
          <Pencil number={1} setAnimationCarrousel={setAnimationCarrousel} animationCarrousel={animationCarrousel}></Pencil>
          {informacionacademica.infoSecondary.map((element, index) => {
return <p className={`infoacademySecondary transition-[opacity] duration-[2500ms] opacity-0 ${animationCarrousel===1? "animate-[transitionOpacity_7000ms_ease-in-out_infinite]":""}`} key={index}>{element}</p>
          })}
        </div>
      </div>
      <div className={`div-img-container w-[100%] justify-around absolute sm:space-x-10 flex flex-col sm:flex-row sm:space-y-0 space-y-10 items-center ${carrousel===1?"opacity-1 right-0":"-right-[150px] opacity-0"}`}>
        <div className='sm:w-[40%] sm:h-[320px] w-[70%] h-[300px] bg-[#8d4925] text-white  rounded-[8px] flex flex-col justify-center items-center z-[1]'>
          <Pencil number={2} setAnimationCarrousel={setAnimationCarrousel} animationCarrousel={animationCarrousel}></Pencil>
{informacionacademica.infoUniversity.map((element, index) => {
  return <p className={`infoacademyUniversity transition-[opacity] duration-[2500ms] opacity-0 ${animationCarrousel===2? "animate-[transitionOpacity_7000ms_ease-in-out_infinite]":""}`} key={index}>{element}</p>
})} </div>
        <div className={'sm:w-[40%] sm:h-[320px] w-[70%] h-[300px] bg-[#8d4925] text-white rounded-[8px] flex flex-col justify-center items-center z-[1]'}>
        <Pencil number={3} setAnimationCarrousel={setAnimationCarrousel} animationCarrousel={animationCarrousel}></Pencil>
        {informacionacademica.infoUniversity.map((element, index) => {
  return <p className={`infoacademyUniversity transition-[opacity] duration-[2500ms] opacity-0 ${animationCarrousel===3? "animate-[transitionOpacity_7000ms_ease-in-out_infinite]":""}`} key={index}>{element}</p>
})}
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionAcademic