import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
  const [packages, setPackages] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/packages')
    .then(res => res.json())
    .then(data => setPackages(data))
  },[])
  return (
    <div className='mt-5'>
      <Container>
      
      <div> 
        <h1 className='text-center fw-bold mb-5'>
         <span  className='text-danger'>OUR</span> PACKAGES
          </h1>
          </div>
        
         
          <div className='row'>
            {
              packages.map(service=><Package

                key={service._id}
                service ={service}
              
              ></Package>)
            }
          </div>
      </Container>
    </div>
  );
};

export default Packages;