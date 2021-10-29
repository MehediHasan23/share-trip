import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';
import header1 from './../../images/header/rsz_1h1-min.png'
import header2 from './../../images/header/header2.png'
import header3 from './../../images/header/header3.png'

const Header = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Header;