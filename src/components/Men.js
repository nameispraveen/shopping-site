import React from 'react'
import men from './icons/Mens.png'
import Foot from './icons/footware.png'
import './Men.css'
import Men_items from './Men_items'
export default function Men() {
  return (
    <div>
      <h1>MENS</h1>
      <div className='men_main_div'><Men_items /></div>
      <img className='image_mensss' src={men}  alt="Logo" />
      <img className='image_mensss' src={Foot}  alt="Logo" />
    </div>
  )
}
