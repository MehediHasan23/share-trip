import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

import { useParams } from 'react-router';
import { useForm } from "react-hook-form";



import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import './Order.css';
import useProvContext from '../../Hooks/useProvContext';
const Order = () => {


  const{id} = useParams()
  const [packages, setPackages] = useState({})
  useEffect(()=>{
    fetch('https://powerful-dawn-79694.herokuapp.com/packages')
    .then(res=> res.json())
    .then(data=>{
      
      const packages = data?.find(pack => pack?._id === id)
      setPackages(packages)
      reset(packages)

    })

  },[id])

 

  // react hook from 

  const { register, handleSubmit , reset ,formState: { errors }} = useForm();
  
  const onSubmit = data => {
    data.status = "pending"
    delete data._id;
    fetch('https://powerful-dawn-79694.herokuapp.com/orders',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json())
    .then(result =>{
        if(result.insertedId){
            alert('order successfully taken')
            reset()
            
        }
    })
};




//user
  const {firebase} = useProvContext()
  const {user} = firebase;
  const {email, displayName} = user;

 
  return (
    <div className='container-fluid order-section'>
      <div className='container py-5'>
     <h1 className='text-center my-5'>PLACE YOUR ORDER</h1>
      <div className="row mx-auto align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={packages?.img}className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{packages?.name}</h5>
                  <p className='m-0'>{packages?.region}</p>
                  <small>{packages?.time}</small>
                  <div className="text-start">
                    <Rating readonly
                      className='text-warning'
                      initialRating={packages?.rating}emptySymbol={<FontAwesomeIcon icon={emptyStar} />}fullSymbol={<FontAwesomeIcon icon={fullStar} />}/>{' '} <span className="text-muted">{packages?.rating}</span>
                      <span className="text-muted">( {packages?.ratingCount} reviews )</span>
                  </div>
                  <p className="card-text">About: {packages?.desc}</p>
                  <h6>Price: {packages?.price}</h6>
                </div>
              </div>
            </div>
          </div>


        </div>




      <div className="col-sm-12 col-md-6 col-lg-6 data-form">
        
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input className='p-2 m-2 w-50' defaultValue={packages?.name} {...register("package_name")} />     

                <input className='p-2 m-2 w-50' defaultValue={displayName} {...register("Name")} />

                <input className='p-2 m-2 w-50' defaultValue={email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input className='p-2 m-2 w-50' placeholder="Address" defaultValue="" {...register("address")} />
                <input className='p-2 m-2 w-50' placeholder="City" defaultValue="" {...register("city")} />
                <input className='p-2 m-2 w-50' placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" className='fw-bold text-muted p-2 m-2 w-50' />
            </form>
        </div>
      </div>


    </div>
    </div>
  );
};

export default Order;



