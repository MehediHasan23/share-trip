import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";


const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
  
  fetch('https://powerful-dawn-79694.herokuapp.com/packages',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
   .then(res=>{
     console.log(res);
     if(res?.data?.insertedId){
       alert('uploaded successfully')
        reset()
     }
   })
  };
  return (
    <div className=' add-container pt-2 pb-3'>
      <h1 className='text-center my-5 fw-bold text-white'>ADD A SERVICE</h1>
      <div className='data-form my-5'>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
      <input
        {...register("name")} placeholder="add a Title"
           className="p-2 m-2 w-50 text-center " required/>
      
          {/* price */}
        <input {...register("price")} placeholder="Charge"
            className="p-2 m-2 w-50 text-center " required/>
          
          {/* Rating */}
          <input {...register("rating")} placeholder="Rating" className="p-2 m-2 w-50 text-center " required/>

          {/* img  */}
          <input {...register("img")} placeholder="Enter A Valid Image Url" className="p-2 m-2 w-50 text-center " required/>
      {/* description  */}
          <input {...register("desc")} placeholder="Write a short note" className="p-2 m-2 w-50 text-center " required/>
      {/* Duration */}
          <input {...register("time")} placeholder="Duration: 5/7/8 hours" className="p-2 m-2 w-50 text-center " required/>
      {/* region  */}
          <input {...register("region")} placeholder="Region: Asia/Europe" className="p-2 m-2 w-50 text-center " required/>
      
          <input {...register("ratingCount")} placeholder="Total Count" className="p-2 m-2 w-50 text-center " required/>
 
      <input type="submit" value='SEND' className='fw-bold text-muted p-2 m-2 w-50'/>
    </form>
    </div>
      
    </div>
  );
};

export default AddService;

