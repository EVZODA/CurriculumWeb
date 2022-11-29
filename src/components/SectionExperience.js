import React from 'react'

const SectionExperience = () => {
  return (
    <>
    <h1  id='sectionExperience' className='bg-[#b96e48] text-center text-white text-[24px] py-[40px]'>Experiencia Laboral</h1>
    <div  className='grid grid-cols-1 justify-items-center py-[20px] bg-[#b96e48] lg:grid-cols-2'>    
<div className='h-[300px] w-[300px] sm:h-[190px] sm:w-[400px] bg-[#eee] my-[20px] rounded-[6px] flex flex-col justify-center text-[20px]'>
  <p className='text-center'>Tecnico Particular a Domicilio</p>
  <p className='text-center'>Marzo 2018 - en curso</p>
</div>
<div className='h-[300px] w-[300px] sm:h-[190px] sm:w-[400px] bg-[#eee] my-[20px] rounded-[6px] flex flex-col justify-center text-[20px]'>
<p className='text-center'>Empresa A -TEC.</p>
  <p className='text-center'>2020</p>
  <p className='text-center'>A-TEC Argentina</p>
<a className='text-center' href='https://www.facebook.com/atecargentina'>Contacto</a>
</div>
<div className='h-[300px] w-[300px] sm:h-[190px] sm:w-[400px] bg-[#eee] my-[20px] rounded-[6px] flex flex-col justify-center text-[20px] lg:col-span-2'>
<p className='text-center'>Instituto Provincial Autartico de la Vivienda</p>
<p className='text-center'>Enero 2021 - Agosto 2021</p>
</div>
    </div>
    </>
  )
}

export default SectionExperience