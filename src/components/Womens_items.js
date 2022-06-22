import React from 'react'
import './Women.css';
import Women_data from './Women_item'
export default function Womens_items() {
  return  Women_data.women.map((val,index)=> {
  return (
      <div>
          <div className='womens_img_div'>
            <div className='women_imgs'>
                <img className='image_mens' src={val.image}  alt="Logo" />
                <div className='dress_name'>{val.item_Name}</div>
                <div className='dress_desc'>{val.item_desc}</div>
                <div><b aria-hidden="true">{val.item_cost}</b><span className='offer_price'>{val.item_original_cost}</span> {val.item_delivery_status}</div>
                <button className='women_btn'>Add to Cart</button>
          </div>
        </div>
      </div>
   )
  })
}
