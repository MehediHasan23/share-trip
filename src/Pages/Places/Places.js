import React from 'react';
import './Places.css'
import pic_1 from './../../images/places/pic-1.png'
import pic_2 from './../../images/places/pic-2.png'
import pic_3 from './../../images/places/pic-3.png'
import pic_4 from './../../images/places/pic-4.png'
import pic_5 from './../../images/places/pic-5.png'
import pic_6 from './../../images/places/pic-6.png'

const Places = () => {
  return (
    <div>
      <div className='container places-container'>
      <div className='text-center mb-5'>
          <h1 className='fw-bold'><span className='text-success'>RECENT</span> TRIPS</h1>
          
        </div>
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <img className='img-fluid' src={pic_1} alt="" />
            <p className='text-muted'>Oct 14, 2013</p>
            <h4 className='text-muted'>Traveling – it leaves you speechless.</h4>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
           <img className='img-fluid' src={pic_2} alt="" />
           <p className='text-muted'>Oct 12, 2019</p>
            <h4 className='text-muted'>JWherever you go becomes a part of you somehow</h4>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4 ">
           <img className='img-fluid' src={pic_3} alt="" />
           <p className='text-muted'>Oct 12, 2019</p>
            <h4 className='text-muted'>Journeys Are Best Measured In New Friends</h4>
          </div>
          

        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <img className='img-fluid' src={pic_4} alt="" />
            <p className='text-muted'>Oct 12, 2019</p>
            <h4 className='text-muted'>Take only memories, leave only footprints </h4>
           
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
           <img className='img-fluid' src={pic_5} alt="" />
           <p className='text-muted'>Oct 12, 2019</p>
            <h4 className='text-muted'> we travel, next to find ourselves</h4>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4 ">
           <img className='img-fluid' src={pic_6} alt="" />
           <p className='text-muted'>Oct 12, 2019</p>
            <h4 className='text-muted'>We travel, initially, to lose ourselves; </h4>
          </div>
          

        </div>

      </div>
    </div>
  );
};

export default Places;