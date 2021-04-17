import React from 'react';
import './../App.css';
import logo from './../logoLight.png';
import Navbar from 'react-bootstrap/Navbar';

const EventsNavBar = () => {
    return (
        <Navbar bg="dark" fixed='top' variant="dark" className='navbar-md navbar-sm'>
          <Navbar.Brand style={{display: 'flex'}}>
            <img
              alt=""
              src={logo}
              width="90"
              height="fitContent"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>
    );
}

export default EventsNavBar;