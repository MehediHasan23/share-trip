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
    <div className="container-fluid admin-section">
      <div className='text-center fw-bold'>
        <h1 className='pt-5'>ADMIN DASHBOARD</h1>
         <h4 className='pt-2 pb-5'>TOTAL ORDERS:  { allOrders.length}</h4>
      </div>
    <Table responsive="sm" className='my-5'>
    <thead>
      <tr>
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>BUYER</th>
                    ))}
            
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}> ORDER ID </th>
                    ))}
            

                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>PRICE</th>
                    ))}
            
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>STATUS</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>CANCEL</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>CONFIRM</th>
                    ))}
          </tr>
          
        </thead>
        {
          allOrders.map(allOrder=>(<tbody>
    
    <tr>
      
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ allOrder?.Name}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ allOrder?._id}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ allOrder?.price}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ allOrder?.status}</td>
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
  );
};

export default ManageOrders;