import { React, useState } from 'react';
import './../App.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import logo from './../logoLight.png';
import FindUs from './FindUs';
import { Facebook, Instagram, GitHub, Linkedin, Twitter, Mail } from 'react-feather';

// footer component
const Footer = ({data}) => {

    // handles icons hover state
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const onHover = (index) => {
        setHover(true);
        setIndex(index);
    }
    
    const noHover = () => {
        setHover(false);
        setIndex(0);
    }

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
                <h2 style={{ color: 'white', fontWeight: 'bold'}}>Manipal Information Security Team</h2>
                <h4 style={{ color: 'white' }}>Manipal Institute of Technology</h4>
                <h4 style={{ color: 'white' }}>Udupi, Karnataka</h4>
                <h4 style={{ color: 'white' }}>576104</h4>
            </Col>
            <Col md={4} style={{ textAlign: 'center', alignSelf: 'center' }}>
                <Row className='justify-content-center' style={{ fontSize: '1.6rem', color: '#e3e5e5' }}>More ways to connect</Row>
                <Row className='justify-content-center social-margin-md social-margin-sm social'>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sudo.mist/">
                            <Instagram onMouseEnter={() => onHover(1)} onMouseLeave={noHover} size={30} color={ hover && index===1 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/wearemist.in/">
                            <Facebook onMouseEnter={() => onHover(2)} onMouseLeave={noHover} size={30} color={ hover && index===2 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/manipal-information-security-team">
                            <Linkedin onMouseEnter={() => onHover(3)} onMouseLeave={noHover} size={30} color={ hover && index===3 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MIST1819">
                            <GitHub onMouseEnter={() => onHover(4)} onMouseLeave={noHover} size={30} color={ hover && index===4 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/sudo_mist">
                            <Twitter onMouseEnter={() => onHover(5)} onMouseLeave={noHover} size={30} color={ hover && index===5 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                    <Col xs={4} md={2} className='my-3'>
                        <a target="_blank" rel="noreferrer" href="mailto:sudo@wearemist.in">
                            <Mail onMouseEnter={() => onHover(6)} onMouseLeave={noHover} size={30} color={ hover && index===6 ? '#009dff' : '#e3e5e5' }/>
                        </a>
                    </Col>
                </Row>
                <Row className='justify-content-center' style={{ fontSize: '1.3rem', color: '#e3e5e5' }}>
                    We made this website. 
                    <span>
                        <FindUs data={data}/>
                    </span>
                </Row>
            </Col>
        </Row>
    );
}
export default Footer;
