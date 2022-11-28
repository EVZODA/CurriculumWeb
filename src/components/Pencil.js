import React from 'react'

const Pencil = ({setAnimationCarrousel, animationCarrousel, number}) => {
  return (
    <div className='pencil' style={{animationPlayState: animationCarrousel===number? "running":"paused" }}>
    <div className='eraser'></div>
    <div className='body-pencil'></div>
    <div className='tip'></div>
    </div>
  )
}

export default Pencil