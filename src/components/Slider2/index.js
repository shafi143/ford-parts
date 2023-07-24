import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./logoSlider2.css"
import PrevButton from "./previousbutton"
import NextButton from './nextButton';
const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    // dots: true,
    // navigation:true,
    // infinite: true,
    // autoplay: true,
    speed: 500,
    centerMode: true,
   
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // variableWidth: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:<PrevButton/>,
    nextArrow:<NextButton/>,  
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: false,
            },
          },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };
  

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  
 

  return (
    <div className={"slider2"}>
    <Slider {...settings}>
   
    {images.map((image, index) => (
      <div key={index} onClick={() => handleSlideClick(index)}>
        <div className="image_section">
        <img
          src={image.src}
          alt={image.alt}
          className={`slider-image ${index === currentSlide ? 'active' : ''}`}
        />
        </div>
        <p className='logo_text'>
            {image.name}
        </p>
        <div className="shopnow">{image.shoping}</div>
      </div>
    ))}
  </Slider>
  </div>
  );
};

export default ImageSlider;