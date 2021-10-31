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
    <div className='order-place'>
     <h1 className='text-center my-5'>PLACE YOUR ORDER</h1>
      <div className="row mx-auto">
        <div className="col-sm-12 col-md-6 col-lg-8">
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
                  <h3>price: {packages?.price}</h3>
                </div>
              </div>
            </div>
          </div>


        </div>




      <div className="col-sm-12 col-md-6 col-lg-4">
        <h1>Add a service</h1>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={packages?.name} {...register("package_name")} />     

                <input defaultValue={displayName} {...register("Name")} />

                <input defaultValue={email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
      </div>


    </div>
  );
};

export default Order;



