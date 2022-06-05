import React from 'react'
import women1 from './icons/women1.png'
import women2 from './icons/women2.png'
import women3 from './icons/women3.png'
import './Women.css';
export default function Womens_items() {
  return (
    <div className='final_div'>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_mens' src={women1}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹839 </b><span className='offer_price'>₹1,999</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_menssss' src={women2}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹359 </b><span className='offer_price'>₹1,999</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_menssss' src={women3}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹679 </b><span className='offer_price'>₹1,999</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
