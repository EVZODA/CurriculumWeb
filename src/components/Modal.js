
import React from 'react'


const infoper = {
    info: "Soy Técnico en Informática de Gestión recibido en la UNLPAM y Full Stack Developer recibido en la Academia Numen. Mi objetivo principal se centra en desarrollar una formación profesional, obtener mayor experiencia laboral, ejercer técnicas aprendidas en el ámbito educativo y adquirir nuevos conocimientos.Soy un apasionado por el desarrollo de aplicaciones web tanto en la parte del frontend como del backend, mi objetivo es seguir mejorando en el manejo de las herramientas de desarrollo.",
    skills: [
        "Frontend: HTML | CSS | Bootstrap | JavaScript | React | Tailwind",
        "Backend: NodeJS | Express | MongoDB | Mongoose",
        "Tecnologias Adicionales: Python | Pascal",
        "Reparación y mantenimiento de pc",
    ]
}



const Modal = ({setShow,show,showinfo}) => {






  return (
          
    <div className={`modal-container fixed right-0 left-0 top-0 bottom-0 z-[200] ${!show? "pointer-events-none": null}`}>
        <div className={`shadow-container relative h-[100%] flex justify-center items-center ${show?"bg-black/[.5]": "opacity-0"}`}>
            <div style={{
            top: show? window.innerHeight/2 - document.querySelector(".modal").clientHeight/2 + "px": "-200px"
            }} className={`modal flex flex-col items-center justify-around absolute p-[25px] border-2 border-solid border-white rounded-[10px] bg-white w-[380px] h-[380px] ${show?"opacity-1":"opacity-0"}`}>
      {showinfo?<ul className='space-y-[10px]'>
    {infoper.skills.map((skill, index)=>{
  return <li className='list-disc mx-[16px]' key={index}> {skill}</li>
    
  
})}
</ul>:null}

{!showinfo?<ul>
<li>{infoper.info}</li>
</ul>:null}
<button onClick={()=>{setShow(false)}} className='bg-[#8d4925] border-[1px] text-white p-[5px] rounded-[6px] mt-[20px]'>aceptar</button>
    </div>
        </div>
    </div>
  )
}



export default Modal