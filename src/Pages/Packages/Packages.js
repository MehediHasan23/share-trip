import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useProvContext from '../../Hooks/useProvContext';
import Package from '../Package/Package';


const Packages = () => {

//data loading 
  const [packages, setPackages] = useState([])
  useEffect(()=>{
    fetch('https://powerful-dawn-79694.herokuapp.com/packages')
    .then(res => res.json())
    .then(data => setPackages(data))
  },[])

  const {firebase} = useProvContext()
  const {loading} = firebase;
      if(loading){
              return (
                <div className="text-center my-5 py-5">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
              );
            }

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