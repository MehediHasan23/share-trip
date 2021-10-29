import React from 'react';
import Destination from '../Destination/Destination';
import Places from '../Places/Places';
import Header from './../../Shared/Header/Header'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Destination></Destination>
      <Places></Places>
      
    </div>
  );
};

export default Home;