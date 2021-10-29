import React from 'react';
import './Package.css';
import Button from '@restart/ui/esm/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Package = (props) => {
  const {_id,time, ratingCount, desc, img, name, price, rating,region} = props.service
  return (
    <div  className='col-sm-12 col-md-6 col-lg-4'> 
      <div  className="card mx-auto className='mb-0' border m-2" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center m-0">
        <h5 className="card-title">{name}</h5>
        <span className='text-warning'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <small className='mx-2 text-dark'>{rating}</small>
        </span>
        <p >Price: {price} $</p>
        <Link to={`/order/${_id}`}><Button className='btn btn-primary w-100'>View Details</Button></Link>
      </div>
      </div>
    </div>
  );
};

export default Package;



// const {_id,time, ratingCount, desc, img, name, price, rating,region} = props.service