import React from 'react'
import './Women.css';
import kidsdata from './Kids_item'
export default function Kids_items() {
 return  kidsdata.Kids.map((data,index)=> {
  return (
    <div>
         <div className='womens_img_div'>
            <div className='women_imgs'>
                <img className='image_mens' src={data.image}  alt="Logo" />
                <div className='dress_name'>{data.item_Name}</div>
                <div className='dress_desc'>{data.item_desc}</div>
                <div><b aria-hidden="true">{data.item_cost}</b><span className='offer_price'>{data.item_original_cost}</span> {data.item_delivery_status}</div>
                <button className='women_btn'>Add to Cart</button>
          </div>
        </div> 
    </div>
  )
 });
}
