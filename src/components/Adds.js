import React from 'react'
import { Link } from 'react-router-dom'
import './Adds.css'
export default function Adds() {
  return (
    <div className='adds_cls'>
        <div>JOIN DI-GI-TAL SHOPPING AND GET 15% OFF</div>&nbsp;&nbsp;
        <button className='Sign_up_cls btn1'><Link  className='a_tag' to='/Signup'>SIGN UP</Link></button>
    </div>
  )
}
