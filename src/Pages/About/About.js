import React from 'react';
import './About.css'
import about1 from './../../images/about/receptionist (1).png'
import about2 from './../../images/about/basil.png'
import about3 from './../../images/about/car.png'
import about4 from './../../images/about/cheers.png'

import expert1 from './../../images/about/t1.png'
import expert2 from './../../images/about/t2.png'
import expert3 from './../../images/about/t3.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Card, CardGroup, Container } from 'react-bootstrap';

const About = () => {
  return (
    <div>
              <div className="container-fluid banner-part">
                      <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-md-6 mt-5 pt-5 text-center">
                              <h1 className="about-title mt-5 pt-5 text-white">ABOUT US</h1>
                          </div>
                      </div>
              </div>
              <div className="container about-details">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                  <img className='w-25' src={about1} alt="" />
                  <div>
                    <h3>24/7 Front Desk</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                  </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                  <img className='w-25' src={about2} alt="" />
                  <div>
                    <h3>Spa Suites</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                  </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                  <img className='w-25' src={about3} alt="" />
                  <div>
                    <h3>Transfer Services</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                  </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                  <img className='w-25' src={about4} alt="" />
                  <div>
                    <h3>Restaurant & Bar</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                  </div>
                  </div>

                </div>
              </div>
              {/* experts section  */}

              <Container className='experts-container'>
      <h1 className='text-center fw-bold mb-5'><span 
      className='text-success '>OUR</span> EXPERTS</h1>

      <div >
      <CardGroup className='text-center'>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert1} />
    <Card.Body>
      <Card.Title>Patrick Cortez</Card.Title>
      <Card.Text>
      Patrick Cortez Very affordable, and totally flexible with the options to stack and combine one to one personal training with group fitness classes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert2} />
    <Card.Body>
      <Card.Title>Patrick Cortez</Card.Title>
      <Card.Text>
      Patrick Cortez is an American personal trainer best known for his work with professional athletes and celebrities.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert3} />
    <Card.Body>
      <Card.Title>Walter Wagner</Card.Title>
      <Card.Text>
      Walter Wagner is a Venezuelan-American professional Latin dance specialist and World Mambo Champion
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
    
    </Container>
      </div>

     

   
  );
};

export default About;