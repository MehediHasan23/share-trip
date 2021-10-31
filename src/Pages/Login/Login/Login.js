import React from 'react';
import { NavLink, useHistory, useLocation} from 'react-router-dom';

import useProvContext from './../../../Hooks/useProvContext'
import './Login.css'
import google from './../../../images/google.png'
import github from './../../../images/github.png'

import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Login = () => {
  const {firebase} = useProvContext()
  const {signInWithGoogle, signInWithGithub, loginProcess, handelEmail, handelPass, user,error,setError, setUser} = firebase;
  console.log(user);

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  return (
  
    <div className="text-center my-4 login-section">
     <h2>Please Login</h2>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/signup">
          Don't have an account? Sign up!
        </NavLink>
      </p>
      <p className="text-danger text-center">{error}</p>
      
       <div className="form-container mx-auto">
      
        <Form
          onSubmit={(e)=>{
            e.preventDefault();
            loginProcess()
            .then(result=>{
              const user = result.user
              setUser(user);
              setError('');
              history.push(redirect)
            })
            .catch(error=>{
              setError(error.message)
            })
          }}
        >
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                
                <FormControl
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
                  onBlur={handelPass}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>

      </div> 
      

      <p className="mt-3">Or</p>
      
      <div>
        <button
          onClick={() => {
            signInWithGoogle()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className="btn"
        >
          <img src={google} width="46px" alt="google-icon" />
        </button>
        <button
          onClick={() => {
            signInWithGithub()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className="btn"
        >
          <img width="55px" src={github} alt="github-icon" />
        </button>

      </div>

    </div>
   
    );
    
};

export default Login;