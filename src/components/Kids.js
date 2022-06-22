import React from 'react'
import kids from './icons/kids.png'
import kids1 from './icons/kids1.png'
import Kids_items from './Kids_items'
import './Men.css'
export default function Kids() {
  return (
    <div>
      <h1>KIDS</h1>
      <div className='men_main_div'>
      <Kids_items />
      </div>
      <img className='image_menss' src={kids}  alt="Logo" />
      <img className='image_menss' src={kids1}  alt="Logo" />
    </div>
  )
}
