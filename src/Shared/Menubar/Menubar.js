import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Menubar.css'
import navlogo from '../../images/nevlogo.png'
import { NavLink } from 'react-router-dom';
import useProvContext from '../../Hooks/useProvContext';


const Menubar = () => {
  const {firebase} = useProvContext()
  const {user, logOut} = firebase;
  const { displayName, photoURL, email } = user;
  return (
    <div>
      <Navbar className='menu-container'  bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={navlogo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
      <Nav.Link as={NavLink} to="/home" className="text-white fw-bold fs-6">HOME</Nav.Link>
      <Nav.Link as={NavLink} to="/contact" className="text-white fw-bold fs-6">CONTACT</Nav.Link>
      
      <Nav.Link as={NavLink} to="/About" className="text-white fw-bold fs-6">ABOUT</Nav.Link>
      {!email ? (
                <>
                <Nav.Link className="text-white fw-bold fs-6" as={NavLink} to="/login">
                    SIGN IN
                  </Nav.Link>
                </>
              ) : (
              <>
              <Nav.Link as={NavLink} to="/myOrders" className="text-white fw-bold fs-6">MY ORDERS</Nav.Link>
              <Nav.Link as={NavLink} to="/manageOrders" className="text-white fw-bold fs-6">MANAGE ORDERS</Nav.Link>
              <Nav.Link as={NavLink} to="/addService" className="text-white fw-bold fs-6">ADD SERVICE</Nav.Link>
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
                
              </>
              
              )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Menubar;