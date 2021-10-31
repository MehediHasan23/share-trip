import React, { useEffect, useState } from 'react';

//manage order 
const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([])
  useEffect(() => {
    fetch('https://powerful-dawn-79694.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setAllOrders(data))
    
  
  }, [])
  console.log(allOrders);
  //delete orders
  const deleteId = (id) => {
    
    const proceed = window.confirm("you want to sure to delete");
    if (proceed) {
      const url = `https://powerful-dawn-79694.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("delete successfully");
            const remaining = allOrders.filter((list) => list._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };
 
  return (
    <div className='w-100'>
      {
        allOrders.map(pak => <div class="table-responsive">
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Buyer</th>
      <th scope="col">Package</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{pak.name}</th>
      <td>{pak.Name}</td>
      <td>{pak._id}</td>
      <td>{pak.email}</td>
      <td>{pak.status}</td>
      <td><button onClick={()=>deleteId(pak._id)} className='btn btn-primary'>Cancel</button></td>
      <td><button className='btn btn-primary'>Approve</button></td>
    </tr>
  </tbody>
</table>
      
    </div>)
      }
    </div>
  );
};

export default ManageOrders;