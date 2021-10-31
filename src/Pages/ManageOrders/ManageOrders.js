import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrders.css';

//manage order 
const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([])
  const [confirm , setConfirm] = useState(true)
  useEffect(() => {
    fetch('https://powerful-dawn-79694.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setAllOrders(data))
    
  
  }, [confirm])
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
            const remaining = allOrders.filter((allOrder) => allOrder._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };

  //confirm status:
  const confirmID = id => {
    const confirm = window.confirm('wanna confirm ?')
  if (confirm) {
    fetch(`https://powerful-dawn-79694.herokuapp.com/orders/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          alert('ordered confirmed')
          setConfirm(!confirm);
      }
    })
  }

  }

 
  return (
    <div className="admin-section p-5">
      <div className='text-center fw-bold text-white'>
        <h1 className='pt-3'>ADMIN DASHBOARD</h1>
         <h4 className='pt-2 pb-2'>TOTAL ORDERS:  { allOrders.length}</h4>
      </div>
      <div className='container'>
         <Table striped bordered hover
 responsive="sm" className='my-3'>
    <thead>
      <tr>
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-white' key={index}>BUYER</th>
                    ))}
            
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-white' key={index}> ORDER ID </th>
                    ))}
            

                    {Array.from({ length: 1 }).map((_, index) => (
                      <th className='text-white' key={index}>PRICE</th>
                    ))}
            
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-white' key={index}>STATUS</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-white' key={index}>CANCEL</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-white' key={index}>CONFIRM</th>
                    ))}
          </tr>
          
        </thead>
        {
          allOrders.map(allOrder=>(<tbody>
    
    <tr>
      
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold text-white' key={index}>{ allOrder?.Name}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold text-white' key={index}>{ allOrder?._id}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold text-white' key={index}>{ allOrder?.price}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold text-white' key={index}>{ allOrder?.status}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td  key={index}><button onClick={() => deleteId(allOrder._id)} className="mx-3 text-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td  key={index}><button onClick={()=> confirmID(allOrder._id)} className="mx-3 text-success"><FontAwesomeIcon icon={faCheckCircle} /></button></td>
      ))}
              
              

              
    </tr>
    
</tbody>))
        }
    </Table>
   </div>

    </div>
  );
};

export default ManageOrders;