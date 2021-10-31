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
    <div className='container'>
      <div className='data-form'>
      <h1>Add a service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
      <input
        {...register("name")} placeholder="TITLE"
           className="p-2 m-2 w-50 text-center fw-bold"/>
      
          {/* price */}
        <input {...register("price")} placeholder="CHARGE"
            className="p-2 m-2 w-50 text-center fw-bold" />
          
          {/* Rating */}
          <input {...register("rating")} placeholder="RATING" className="p-2 m-2 w-50 text-center fw-bold" />

          {/* img  */}
          <input {...register("img")} placeholder="ENTER A VALID IMAGE URL" className="p-2 m-2 w-50 text-center fw-bold" />
      {/* description  */}
          <input {...register("desc")} placeholder="Write a short note" className="p-2 m-2 w-50 text-center fw-bold" />
      {/* Duration */}
          <input {...register("time")} placeholder="Duration: 5/7/8 hours" className="p-2 m-2 w-50 text-center fw-bold" />
      {/* region  */}
          <input {...register("region")} placeholder="REGION : ASIA/EUROPE" className="p-2 m-2 w-50 text-center fw-bold" />
      
          <input {...register("ratingCount")} placeholder="Total Count" className="p-2 m-2 w-50 text-center fw-bold" />
 
      <input type="submit" value='SEND' className='fw-bold text-muted'/>
    </form>
    </div>
      
    </div>
  );
};

export default AddService;

/* "name": "Mount Erciyes",
    "price": "890$",
    "rating": "4.5",
    "img": "https://preview.colorlib.com/theme/destino/images/xpopular_1.jpg.pagespeed.ic.u7BF9JOUqg.webp",
    "desc": "Popular mountain with a ski resort.",
    "time": "5 hours",
    "region": "Asia",
    "ratingCount": "1017" */




//  axios.post('https://fierce-beyond-94481.herokuapp.com/services', data)