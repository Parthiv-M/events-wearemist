import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MapPin } from 'react-feather';
import Card from 'react-bootstrap/Card';
import './../App.css';

// carousel for upcoming events
const UpcomingEvents = ({data}) => {

    // individual carousel slides
    const carouselSlide = data.map((event, index) => {

        return (
            <Carousel.Item key={index} style={{ height:'fitContent', width:'96vw' }}>
                <Row>
                    <Image
                    src={event.src}
                    alt={event.name}
                    className="image center"
                    fluid
                    />
                </Row>
                <Carousel.Caption style={{ height:'fitContent'}}>
                    <Row>
                        <Col sm={12} md={8} className='text-align-left-md text-align-sm head-size-md head-size-sm' style={{ fontWeight: 'bold', color: '#111111' }}>
                            { event.name }
                        </Col>
                        <Col sm={12} md={4} className='text-align-right-md text-align-sm head-size-md head-size-sm' style={{ fontWeight: 'bold', color: '#3c3c3c' }}>
                            <span >
                                <MapPin size={35} style={{ marginTop: -7, marginRight: 5 }}/>
                                {event.platform}
                            </span>
                        </Col>
                    </Row>
                    <hr style={{ color:'black', backgroundColor:'black', height:'2px' }}/>
                    <Row>
                        <Col sm={12} md={8} className='text-align-left-md text-align-sm non-head-size-md non-head-size-sm' style={{fontWeight: 'bold', color: '#3c3c3c' }}>
                            { event.speakers.map((speaker, index) =>
                                {
                                    return(
                                        <>
                                            <span key={index}>
                                            {speaker} <span style={{ display:'inline-block', width:'20px' }}></span> 
                                            </span>
                                        </>
                                    )
                            })}
                        </Col>
                        <Col sm={12} md={4} className='text-align-right-md text-align-sm non-head-size-md non-head-size-sm'>
                            <span className='text-dark'>
                                {event.date}{', '}
                                {event.time}
                            </span>
                        </Col>                        
                    </Row>
                    <Row style={{marginTop: '1rem'}}>
                        <Col sm lg={8} className='text-md-left'>
                            {
                                event.badges.map((badge, index) =>
                                {
                                    return(
                                        <span key={index} className="non-head-size-md non-head-size-md">
                                            <Badge pill variant="primary" style={{ backgroundColor:'#808080', padding: '15px', marginRight: 5 }}>
                                                {badge}
                                            </Badge>
                                        </span>
                                    )
                                })
                            }
                        </Col>
                        <Col sm lg={4} className='text-md-right'>
                            {
                            // check for existence of link    
                            !event.link 
                                ? 
                                <></>
                                : 
                                <span className="non-head-size-md non-head-size-md">
                                    <Badge pill variant="primary" style={{ backgroundColor:'transparent', color: '#009dff', padding: '15px' }}>
                                        <a id="register" style={{ textDecoration: 'none' }} href={event.link} target="_blank" rel="noreferrer">Register here</a>
                                        <span style={{ width:'20px' }}></span>
                                    </Badge>
                                </span> 
                            }
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    // component for no upcoming events
    const NoUpcomingEvents = () => {
        return (
            <Row>
                <img
                src="https://raw.githubusercontent.com/Parthiv-M/events-wearemist/main/images/noEvents.png"
                alt='No Upcoming Events'
                className="center image"
                />
            </Row>
        );
    }

    return (           
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    data.length === 0 
                    ? 
                    <NoUpcomingEvents /> 
                    : 
                    <Carousel>
                        {carouselSlide}
                    </Carousel>
                }
            </div>
        </div>
    );
}

// component for past events rendered as cards
const PastEvents = ({data}) => {

    // card title component
    const CardTitle = ({data}) => {
        return (
            <Row>
                <Col md={7} sm={12} style={{ height: 50, fontSize: '1.3rem', fontWeight: 'bold' }}>
                    {data.name}
                </Col>
                <Col md={5} sm={12} className='text-align-right-md text-align-sm'>
                    <MapPin style={{ marginRight: 7 }}/>
                    <span>{data.platform}</span>
                </Col>
            </Row>
        );
    } 

    // speakers and time of the event
    const SpeakerTime = ({data}) => {
        return (
            <Row style={{ height: 80 }}>
                <Col sm={12} md={8} className='text-align-left-md text-align-sm'>
                    { data.speakers.map((speaker, index) => {
                        return(
                            <span key={index} style={{ fontSize: '1.3rem', color: 'gray' }}>{speaker} </span>
                        )
                        })
                    }
                </Col>
                <Col sm={12} md={4} className='text-align-right-md text-align-sm'>
                    <span style={{fontWeight: 'bold'}}>{data.date}</span><br /><span>{data.time}</span>
                </Col>
            </Row>
        );
    }

    // badges indicating type of event
    const Badges = ({data}) => {
        return (
            <React.Fragment>
                {
                    data.badges.map((badge, index) =>
                    {
                        return(
                            <Badge className='ml-2 mt-1' pill variant="secondary" style={{ padding: 10, fontSize: '1rem' }}>
                                {badge}
                            </Badge>
                        )
                    })
                }
            </React.Fragment>
        );
    }

    // event card
    const eventCard = data.map((event, index) => 
      {
          return(
            <Card key={index} style={{ margin: 10, width: 460, height: 'fitContent' }}>
                <div style={{ backgroundColor:'#E8E8E8' }}>
                <div style={{ height: 'fitContent' }}>
                    <Card.Img variant="top" src={event.src} />
                </div>
                </div>
                <Card.Body>
                    <Card.Title className='text-align-left-md text-align-sm'>
                        <CardTitle data={event}/>
                    <hr style={{color:'black', backgroundColor:'black', height:'2px'}}/>
                    </Card.Title>
                    <Card.Text>
                        <SpeakerTime data={event}/>
                        <br/>
                        <div style={{ textAlign:'left' }}>
                        <Row className='pl-2 justify-content-left'>
                            <Badges data={event}/>
                        </Row>
                        </div>
                    </Card.Text>
                </Card.Body>
          </Card>
          )
      })

      return(
            <Row className='p-md-5 align-items-center justify-content-center'>
                {eventCard}
            </Row>
        );
}

export {
    UpcomingEvents,
    PastEvents
};