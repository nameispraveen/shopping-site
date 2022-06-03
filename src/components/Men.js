import React from 'react'
import men from './icons/Mens.png'
import Foot from './icons/footware.png'
import './Men.css'
export default function Men() {
  return (
    <div>
      <h1>MENS</h1>
      <img className='image_mens' src={men}  alt="Logo" />
      <img className='image_mens' src={Foot}  alt="Logo" />
    </div>
  )
}
