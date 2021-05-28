import React from 'react';
import './../App.css';
import logo from './../logoLight.png';
import Navbar from 'react-bootstrap/Navbar';

// navbar component for the page
const EventsNavBar = () => {
    return (
        <Navbar fixed='top' className='navbar-md navbar-sm' style={{ height: '70px' }}>
          <Navbar.Brand style={{ display: 'flex' }}>
            <img
              alt=""
              src={logo}
              width='95px'
              height='42px'
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className="text-white" style={{ background:'transparent', fontSize:'1.5rem', fontWeight:'bold', cursor:'default' }}>
            E V E N T S
          </div>
        </Navbar>
    );
}

export default EventsNavBar;