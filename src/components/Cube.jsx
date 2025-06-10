import React from 'react'
import './cube.css'

const Cube = ({reffer,name}) => {
  


  return (
    <div ref={item => reffer && reffer.current && reffer.current.push(item)} className='cube origin-center m-auto rotate-z-90'>
      <div className="front "><p className='text-md'>{name}</p></div>
      <div className="right "><p className='text-md'>{name}</p></div>
      <div className="back "><p className='text-md'>{name}</p></div>
      <div className="left "><p className='text-md'>{name}</p></div>
    </div>
  )
}

export default Cube
