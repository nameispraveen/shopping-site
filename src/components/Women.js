import React from 'react'
import women from'./icons/Women.png'
import Foot from './icons/footware.png'
import './Men.css'
import Womens_items from './Womens_items'
export default function Women() {
  console.log(Womens_items, "test")
  return (
    <div>
      <h1>WOMENS</h1>
      <img className='image_menss' src={women}  alt="Logo" />
      <div className='main_div'>
        <Womens_items />
      </div>
      <img className='image_menss' src={Foot}  alt="Logo" />     
    </div>
  )
}
