import React from 'react';
import './../App.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const InfoText = () => {
    return (
        <Row className='padding-md padding-sm'>
            <Col md={12} style={{ fontSize: '1.6rem', textAlign: 'left' }}>
                <div className='title-md'>
                    EVENTS
                    <div style={{ flexGrow: 1, borderBottom: '3px solid #3c3c3c' }}></div>
                </div>
                <br />
                    This page kees a tab of the all the events Manipal Information Security Team conducts for cybersecurity 
                    enthusiasts and technology nerds. <span style={{color: 'gray'}}> Keep track of our events to stay abreast 
                    with the latest in the cyber world </span>            
            </Col>
        </Row>
    );
}

export default InfoText;