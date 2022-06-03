import React from 'react'
import './Signup.css'
export default function Signup() {
  return (
   <div className='outer_div'>
        <div className='Sign_up_data'>
            <label>Name</label>
            <input className='input_type' type="text" placeholder="Praveen"/>
            <label>Email</label>
            <input className='input_type' type='email' placeholder="Praveen@gmail.com" />
            <label>Mobile No</label>
            <input className='input_type' type='tel' placeholder="+91 9951478031"/>
            <label>Birthday</label>
            <input className='input_type' type='date'/>
            <label>Password</label>
            <input className='input_type' type='password' placeholder="Praveen@123#" />
            <button className='sign_btn button2'>Signup</button>
        </div>
   </div>
  )
}
