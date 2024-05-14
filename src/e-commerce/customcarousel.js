// src/components/ImageCarousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './customcarousel.css'
const CustomCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={100}
    >
      <div id='imagecarousel'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ0kE3DEZgYbIiCPI0OOj4eUZJeOCA073Yw&s" alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div id='imagecarousel'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwTE2xDD0M39BN4Lx5JEqbDuVEbcGSQZhmQ&s" alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div id='imagecarousel'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4o8_5i4URT7MnfeOWWTMwVaZJwTu7UYWOw&s" alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
