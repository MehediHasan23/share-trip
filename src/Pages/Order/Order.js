import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Order = () => {
  const{id} = useParams()
  const [packages, setPackages] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/packages')
    .then(res=> res.json())
    .then(res=> setPackages(res))
  },[])

  const matchingItem = packages?.find(pack => pack?._id === id)

  return (
    <div>
      <Container className ='d-flex flex-wrap justify-content-center align-items-sm-center details'>
      <div>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={matchingItem?.img} />
          <Card.Body className='text-center'>
          <Card.Title>{matchingItem?.name}</Card.Title>
          <p className='m-0'>Description: {matchingItem?.desc}</p>
            <p className='m-0'>Price: {matchingItem?.price} $</p>
            <p>Rating: {matchingItem?.rating}</p>
            {/* <Card.Text>{matchingItem}</Card.Text> */}
            <Link to='/home'><Button className='w-100' variant="primary">Gb Back</Button></Link>
          </Card.Body>
          </Card>
          </div>
    </Container>
    </div>
  );
};

export default Order;