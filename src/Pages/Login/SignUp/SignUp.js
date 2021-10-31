import React from 'react';
import './SignUp.css'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useProvContext from '../../../Hooks/useProvContext';



const SignUp = () => {
  const {firebase} = useProvContext();
  const {
  
    handleName,
    handelPass,
    handelEmail,
    registerProcess,
    error
  }= firebase;
  return (
    

    <div className="text-center my-4">
      <h2>SIGN UP</h2>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          Already have an account? Please login!
        </NavLink>
      </p>
      <p className="text-danger text-center">{error}</p>
      <div className="form-container mx-auto">
        <Form onSubmit={registerProcess}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label> 
              <InputGroup className="mb-2">
                <FormControl
                  required
                  onBlur={handleName}
                  type="text"
                  autoComplete="current-name"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                
                <FormControl
                  required
                  onBlur={handelEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                
                <FormControl
                  required
                  onBlur={handelPass}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-primary mt-2 w-100">
            Sign up
          </Button>
        </Form>
      </div>
      
    </div>
  

  );
};

export default SignUp;