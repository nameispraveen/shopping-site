import React from 'react'
import women from'./icons/Women.png'
import Foot from './icons/footware.png'
import './Men.css'
export default function Women() {
  return (
    <div>
      <h1>WOMENS</h1>
      <img className='image_mens' src={women}  alt="Logo" />
      <img className='image_mens' src={Foot}  alt="Logo" />
    </div>
  )
}
