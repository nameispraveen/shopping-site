import React from 'react'
import './Main.css'
import { useState } from 'react';
import img_men from './components/icons/man.png';
import { Link } from 'react-router-dom';
export default function Main() {
  const[Profile,setprofile]=useState(false);
  var profiledata=(
    <div className='sidenavs'>
         <div className='close_btns' onClick={()=>setprofile(false)}>X</div>
        <img className='image_men_clss' src={img_men}  alt="Logo" />
        <div>Praveen_shetty</div>
        <div><Link className='a_tag' to='/Notification'>Notification</Link></div>
        <div><Link className='a_tag' to='/Edit_profile'>Edit profile</Link></div>
        <div><Link className='a_tag' to='/Settings'>Settings</Link></div>
        <button><Link  onClick={()=>setprofile(false)} className='a_tag log_btn' to='/Logout'>Logout</Link></button>
    </div>
  )
  return (
    <div className='Main_name'>
        <div>Di-gi-tal shopping</div>
        <img className='image_men_cls' src={img_men}  alt="Logo" onClick={()=>setprofile(true)}/>
        {Profile ?profiledata : null}
    </div>
  )
}
