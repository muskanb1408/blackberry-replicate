import React, { Component } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import Body from "./Body";
import  Third from "./Third";
import "../App.css";
import Navbar from "./Navbar";



class ImageSlider extends Component {
  render(){
  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    vertical:true,
   
  };
    return (
      <Slider {...settings}>
        
        <div className="card-image">
              <Navbar />
            </div>
            
            <div className="card-image">
              <Body />
            </div>
            <div className="card-image">
             <Third />
            </div>
            <div className="card-image">
             <Footer />
            </div>
           
      </Slider>
    );
  }
}


  export default ImageSlider;
  