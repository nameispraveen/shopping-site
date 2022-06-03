import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer_cls'>
        <div className='footer_clsss'>
            <span><Link className='a_tag_footer' to='/Privacy_Policy'>Privacy Policy</Link></span> &nbsp; ||&nbsp;
            <span><Link className='a_tag_footer' to='/Terms_and_Conditions'>Terms and Conditions</Link></span>&nbsp; ||&nbsp;
            <span><Link className='a_tag_footer' to='/Cookies'>Cookies</Link></span>
        </div>
        <div style={{ float: 'right', color: '#c8cbcc'}}>©2022 di-gi-tal shopping India Marketing Pvt. Ltd ___ _</div>
    </footer>
  )
}
