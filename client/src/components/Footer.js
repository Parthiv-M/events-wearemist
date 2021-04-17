import React from 'react';
import './../App.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import logo from './../logoLight.png'

const Footer = () => {
    return (
        <Row className='footer-md footer-sm'>
            <Col md={4} sm={12} style={{textAlign: 'center', alignSelf: 'center' }}>
                <img
                  alt=""
                  src={logo}
                  width="150"
                  height="fitContent"
                  className="d-inline-block align-top"
                />
            </Col>
            <Col md={4} sm={12} className='footer-text-align-sm footer-text-align-md'>
                <h2 style={{color: 'white', fontWeight: 'bold'}}>Manipal Information Security Team</h2>
                <h4 style={{color: 'white'}}>Manipal Institute of Technology</h4>
                <h4 style={{color: 'white'}}>Udupi, Karnataka</h4>
                <h4 style={{color: 'white'}}>576104</h4>
            </Col>
            <Col md={4} sm={12}>
            </Col>
        </Row>
    );
}
export default Footer;
