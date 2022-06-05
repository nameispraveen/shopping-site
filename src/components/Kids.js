import React from 'react'
import kids from './icons/kids.png'
import kids1 from './icons/kids1.png'
import Kids_items from './Kids_items'
import './Men.css'
export default function Kids() {
  return (
    <div>
      <h1>KIDS</h1>
      <Kids_items />
      <img className='image_mens' src={kids}  alt="Logo" />
      <img className='image_mens' src={kids1}  alt="Logo" />
    </div>
  )
}
