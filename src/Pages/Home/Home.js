import React from 'react';
import Destination from '../Destination/Destination';
import Packages from '../Packages/Packages';
import Places from '../Places/Places';
import Header from './../../Shared/Header/Header'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Packages></Packages>
      <Destination></Destination>
      <Places></Places>
      
    </div>
  );
};

export default Home;