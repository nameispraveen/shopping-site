import React, { Component } from "react";
import img1 from './icons/kids.png'
import img2 from './icons/home1.jpg'
import img3 from './icons/home2.jpg'
import img4 from './icons/Women.png'
import img5 from './icons/Mens.png'
import './Signup.css'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Men_items from "./Men_items";
import Womens_items from "./Womens_items";
import Kids_items from "./Kids_items";

class Home extends Component {
  componentDidMount() {
    setInterval(this.reload, 900000);
  }

  reload = () => {
    window.location.reload(true);
  };

  render() {
    const { height } = this.props;
    return(
        <div>
            <Carousel className='carousel_img'
            autoPlay={true}
            showArrows={true}
            infiniteLoop={true}
            interval={7200}
            stopOnHover={true}
            showThumbs={true}
            showStatus={true}
            showIndicators={false} >
                <div>
                    <Link className='a_tag' to='/Kids'><img className='img_tag' src={img1}  data-interval="2"/></Link>
                </div>
                <div>
                    <img className='img_tag' src={img2} data-interval="2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img  className='img_tag' src={img3} data-interval="2"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img className='img_tag'  src={img4} data-interval="2"/>
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img className='img_tag'  src={img5} />
                    {/* <p className="legend">Legend 5</p> */}
                </div>
            </Carousel>
            <Men_items />
            <Kids_items/>
            <Womens_items />

        </div>
    )
  }
}
export default Home;