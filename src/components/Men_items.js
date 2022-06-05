import React from 'react'
import './Women.css';
import men1 from './icons/men1.png'
import men2 from './icons/men2.png'
import men3 from './icons/man3.png'
export default function Men_items() {
  return (
    <div className='final_div'>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_mens' src={men1}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹556 </b><span className='offer_price'>₹1,999</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_menssss' src={men2}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹339 </b><span className='offer_price'>₹3,999</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
        <div className='womens_img_div'>
            <div className='women_imgs'>
                    <img className='image_menssss' src={men3}  alt="Logo" />
                    <div className='dress_name'>Greciilooks</div>
                    <div className='dress_desc'>Greciilooks Women Tops for Women Digital Printed Regular Tops for Girls</div>
                    <div><b aria-hidden="true">₹889 </b><span className='offer_price'>₹3889</span> (83% off) FREE Delivery on first order.</div>
                    <button className='women_btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
