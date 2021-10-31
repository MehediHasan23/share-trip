import React from 'react';
import './Contact.css'
import contact_img from './../../images/contact1.jpeg'

const Contact = () => {
  return (
    <div className="contact-container  p-0 container">
        <div className="row ">
        <h1 className='text-center mb-5 fw-bold'>CONTACT US</h1>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div>
              <img className='img-fluid' src={contact_img} alt="" />
            </div>
          
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            
            <div className='d-flex align-items-center     justify-content-between'>
              <div>
                <h4>Connect By Email</h4>
                <p>Get a quote or other info  by sending us a message. Our <br /> travel consultants will  contact you within one business day.</p>
              </div>
              <div>
                <button className='btn btn-danger'>Request info</button>
              </div>
            </div>
            <hr />
            <div className='d-flex align-items-center     justify-content-between'>
              <div>
                <h4>Connect In Store</h4>
                <p>Visit us in one of our 4 locations in NJ, NY and PA to start <br />planning with your local travel expert!</p>
              </div>
              <div>
                <button className='btn btn-danger'>Find a Store</button>
              </div>
            </div>
            <hr />
            <div className='d-flex align-items-center     justify-content-between'>
              <div>
                <h4>Customer Service</h4>
                <p>Need to speak with someone regarding your Liberty Trave<br />experience? Contact our Customer Service team.</p>
              </div>
              <div>
              <button className='btn btn-danger'>Contact us</button>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
          <textarea className=" w-100" name="message" id="message" cols="30" rows="9" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
          <div className='mt-5'>
          <form className="row g-3">
            <div className="col-md-6">
              
              <input type="email" className="form-control" id="inputEmail4" placeholder='email'/>
            </div>
            <div className="col-md-6">
              <input type="password" className="form-control" id="inputPassword4" placeholder='Password'/>
            </div>
            <div className="col-12">
              <input type="text" className="form-control" id="inputAddress" placeholder='Address'/>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;