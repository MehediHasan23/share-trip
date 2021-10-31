import React from 'react';
import './Error.css'
import errorPIC from '../../images/error.jpg'

const Error = () => {
  return (
    <div className='container-fluid text-center bg-light'>
      <img className='img-fluid' src={errorPIC} alt="" />
    </div>
  );
};

export default Error;