import React from 'react';
import { Card , Button, Table} from 'react-bootstrap';

const MyOrder = (props) => {
  console.log(props);
  const{img, Name, name, price, address, city, email, phone, _id} = props.list
  console.log(props);

  

  return (
   <div>
    
    {/* <div class="table-responsive">
      <table class="table">
      <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Place</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{Name}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td><button onClick={()=>deleteId(_id)} className='btn btn-primary'>Delete</button></td>
    </tr>
    
  </tbody>
</table>
      </table>
    </div> */}
  
   </div>
  );
};

export default MyOrder;