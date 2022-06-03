import React from 'react'
import img1 from './icons/kids.png'
import img3 from './icons/kids1.png'
import img4 from './icons/Women.png'
import img5 from './icons/Mens.png'
import './Signup.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
  return (
    <div>
      <Carousel className='carousel_img'>
        <div>
            <img className='img_tag' src={img1} data-delay="2ms"/>
            <p className="legend">Legend 1</p>
        </div>
        {/* <div>
            <img className='img_tag' src={img2} />
            <p className="legend">Legend 2</p>
        </div> */}
        <div>
            <img  className='img_tag' src={img3} data-delay="2ms"/>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img className='img_tag'  src={img4} />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img className='img_tag'  src={img5} />
            <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    </div>
  )
}
