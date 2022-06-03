import React from 'react'
import kids from './icons/kids.png'
import kids1 from './icons/kids1.png'
import './Men.css'
export default function Kids() {
  return (
    <div>
      <h1>KIDS</h1>
      <img className='image_mens' src={kids}  alt="Logo" />
      <img className='image_mens' src={kids1}  alt="Logo" />
    </div>
  )
}
