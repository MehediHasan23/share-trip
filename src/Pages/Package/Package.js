import React from 'react';
import './Package.css';
import Button from '@restart/ui/esm/Button';
import Rating from 'react-rating';

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Package = (props) => {
  const {_id, ratingCount,  img, name, price, rating,} = props.service
  return (
    <div  className='col-sm-12 col-md-6 col-lg-4'> 
      <div  className="card mx-auto className='mb-0' border m-2" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center m-0">
        <h5 className="card-title">{name}</h5>
        <div className="text-start">
           <Rating readonly
            className='text-warning'
            initialRating={rating}emptySymbol={<FontAwesomeIcon icon={emptyStar} />}fullSymbol={<FontAwesomeIcon icon={fullStar} />}/>{' '} <span className="text-muted">{rating}</span>
            <span className="text-muted">( {ratingCount} reviews )</span>
         </div>
        <p >Price: {price}</p>
        <Link to={`/order/${_id}`}><Button className='btn btn-primary w-100 fw-bold'>Book Now</Button></Link>
      </div>
      </div>
    </div>
  );
};

export default Package;



