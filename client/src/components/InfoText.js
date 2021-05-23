import React from 'react';
import './../App.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

// component for genereal info text for page
const InfoText = () => {
    return (
        <Row className='padding-md padding-sm'>
            <Col md={12} className='info-md info-sm' style={{ textAlign: 'left' }}>
                <div className='title-md title-sm'>
                    EVENTS
                    <div style={{ flexGrow: 1, borderBottom: '4px solid #3c3c3c' }}></div>
                </div>
                <br />
                    This page keeps a tab of all the events Manipal Information Security Team conducts for cybersecurity 
                    enthusiasts and technology nerds. <span style={{color: 'gray'}}> Keep track of our events to stay abreast 
                    with the latest in the cyber world </span>            
            </Col>
        </Row>
    );
}

export default InfoText;