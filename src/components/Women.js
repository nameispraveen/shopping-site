import React from 'react'
import women from'./icons/Women.png'
import Foot from './icons/footware.png'
import './Men.css'
import Womens_items from './Womens_items'
export default function Women() {
  return (
    <div>
      <h1>WOMENS</h1>
      <img className='image_mens' src={women}  alt="Logo" />
      <Womens_items />
      <img className='image_mens' src={Foot}  alt="Logo" />     
    </div>
  )
}
