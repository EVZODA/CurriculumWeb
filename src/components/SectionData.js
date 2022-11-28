import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import person from '../img/person.svg'
import skills from '../img/skills.svg'

const SectionData = () => {

  const [show, setShow] = useState(false)
  const [showinfo, setShowInfo] = useState(false)
  return (<>
  <Modal setShow={setShow} showinfo={showinfo} show={show}></Modal>
    <div className='items-center flex flex-col justify-around h-[700px] md:flex md:flex-row md:justify-around bg-[#b96e48]'>
      <div className='rounded-[8px] h-[300px] w-[300px] flex flex-col justify-between py-[20px] bg-[white] text-[#8d4925] '>
        <img src={person} className='h-[200px]'/>
      <button className='' onClick={()=>{setShow(true); setShowInfo(false)}}>Perfil personal</button>
      </div>
      <div className='rounded-[8px] h-[300px] w-[300px] flex flex-col justify-between py-[20px] bg-[white] text-[#8d4925] '> 
      <img src={skills} className='h-[200px]'/>
        <button className='' onClick={()=>{setShow(true); setShowInfo(true)}}>Habilidades</button>
      </div>
    </div>
    </>)
  
}

export default SectionData