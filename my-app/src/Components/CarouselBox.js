import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img2.png";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        <img
        src = {Img1}
        width= "1512px"
        height= "737px"
        /> 
      <img
        src = {Img2}
        width= "1512px"
        height= "737px"
        /> 
      <img
        src = {Img3}
        width= "1512px"
        height= "737px"
        /> 
    </Slider>
  );
}