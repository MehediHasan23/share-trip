import React, { useEffect, useState } from "react";
import useProvContext from "../../Hooks/useProvContext";
import "./MyOrders.css";
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



const MyOrders = () => {
  const {firebase, } = useProvContext()
  const {user} = firebase;
  const {email} = user; 
  const [lists, setLists] = useState([]);
  useEffect(() => {
    
    fetch(`https://powerful-dawn-79694.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, [email]);

  //delete order
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
            const remaining = lists.filter((list) => list._id !== id);
            setLists(remaining);
          }
        });
    }
  };
  
  

  return (
    <div className="container-fluid admin-section p-2">
      <div className='text-center fw-bold my-5'>
        <h1>REVIEW YOUR PACKAGES</h1>
         <h4>TOTAL ORDERS:  { lists.length}</h4>
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
          </tr>
          
        </thead>
        {
          lists.map(list=>(<tbody>
    
    <tr>
      
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ list?.Name}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ list?._id}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ list?.price}</td>
      ))}
              
      {Array.from({ length: 1 }).map((_, index) => (
        <td className='fw-bold' key={index}>{ list?.status}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td  key={index}><button onClick={() => deleteId(list._id)} className="mx-3 text-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
      ))}
              
              
    </tr>
    
</tbody>))
        }
    </Table>

    </div>
  );
};

export default MyOrders;
