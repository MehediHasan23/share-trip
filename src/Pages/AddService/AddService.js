import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";


const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
  
  fetch('http://localhost:5000/packages',{
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
      <input placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />
      <textarea placeholder='description' {...register("description")} />
      <input type="number" {...register("price")} />
      <input placeholder='img' {...register("img")} />
      <input type="submit" />
    </form>
    </div>
      
    </div>
  );
};

export default AddService;





//  axios.post('https://fierce-beyond-94481.herokuapp.com/services', data)