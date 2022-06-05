import React, { useState } from 'react'
import './Navbar.css'
import img from './components/icons/Menu.png';
import { Link } from 'react-router-dom';
 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  var data=(<div className='sidenav' id='mySidenav'>
  <div className='close_btn' onClick={() => setIsOpen(false)}>X</div>
  <div><Link className='a_tag' to='/'>HOME</Link></div>
  <div><Link className='a_tag' to='/Men'>MENS</Link></div>
  <div><Link className='a_tag' to='/Women'>WOMENS</Link></div>
  <div><Link className='a_tag' to='/Kids'>KIDS</Link></div>
</div>);
  return (<>
   <div><img className='image_cls' src={img}  alt="Logo" onClick={() => setIsOpen(true)} /></div>
    <div className='Navbar_class'>
        <div><Link className='a_tag' to='/'>HOME</Link></div>
        <div><Link className='a_tag' to='/Men'>MENS</Link></div>
        <div><Link className='a_tag' to='/Women'>WOMENS</Link></div>
        <div><Link className='a_tag' to='/Kids'>KIDS</Link></div>
    </div>
    {isOpen ? data : null}
    </>
  )
}
 export default Navbar;
