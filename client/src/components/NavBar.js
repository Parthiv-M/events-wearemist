import React from 'react';
import './../App.css';
import logo from './../logoLight.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

// navbar component for the page
const EventsNavBar = () => {
    return (
        <Navbar fixed='top' className='navbar-md navbar-sm'>
          <Navbar.Brand style={{ display: 'flex' }}>
            <img
              alt=""
              src={logo}
              width="90"
              height="fitContent"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div style={{color:'white', background:'transparent', border:'none', fontSize:'1.5rem', fontWeight:'bold', cursor:'default'}} >
            E V E N T S
          </div>
        </Navbar>
    );
}

export default EventsNavBar;