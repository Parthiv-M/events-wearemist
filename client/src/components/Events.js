import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import FeatherIcon from 'feather-icons-react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './../App.css';

// carousel for upcoming events
const UpcomingEvents = ({data}) => {
    const carouselSlide = data.map((event) => {

        return (
            <Carousel.Item style={{ height:'fitContent', width:'96vw', padding:'40px 0', backgroundColor:'#E8E8E8' }}>
                <Row >
                    <img
                    src={event.src}
                    alt={event.name}
                    class="center"
                    />
                </Row>
                <Carousel.Caption style={{ height: 'fitContent'}}>
                    <Row>
                        <Col sm={12} md={8} className=' text-align-left-md text-align-sm' style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#3c3c3c' }}>
                            { event.name }
                        </Col>
                        <Col sm={12} md={4} className='text-align-right-md text-align-sm' style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3c3c3c' }}>
                            <span style={{ fontSize:'2rem' }}><FeatherIcon icon='map-pin' size='35px' style={{ margin:'10px' }}/>
                                {event.platform}
                            </span>
                        </Col>
                    </Row>
                    <hr style={{ color:'black', backgroundColor:'black', height:'2px' }}/>
                    <Row>
                        <Col sm={12} md={8} className='text-align-left-md text-align-sm' style={{fontWeight: 'bold', fontSize: '1.8rem', color: '#3c3c3c' }}>
                            { event.speakers.map((speaker) =>
                                {
                                    return(
                                        <>
                                            <span>
                                            {speaker} <span style={{ display:'inline-block', width:'20px' }}></span> 
                                            </span>
                                        </>
                                    )
                            })}
                        </Col>
                        <Col sm={12} md={4} className='text-align-right-md text-align-sm' style={{ fontSize:'1.5rem'}}>
                            <span>
                                {event.date}{', '}
                                {event.time}
                            </span>
                        </Col>                        
                    </Row>
                    <h4 style={{ textAlign:'left', color:'#808080' }}>
                            
                    </h4>
                    <br/>
                    <div style={{textAlign:'left'}}>
                        {
                            event.badges.map((badge) =>
                            {
                                return(
                                    <span style={{ fontSize:'30px', paddingRight: '8px' }}>
                                        <Badge pill variant="primary" style={{ backgroundColor:'#808080', padding: '15px' }}>
                                            {badge}
                                        </Badge>
                                    </span>
                                )
                            })
                        }
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (    
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Carousel >
                    {carouselSlide}
                </Carousel>
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
                <Col md={8} sm={12}>
                    {data.name}
                </Col>
                <Col md={4} sm={12} className='text-align-right-md text-align-sm'>
                    <FeatherIcon icon='map-pin' style={{ marginRight: 7, color: 'red' }}/>
                    <span>{data.platform}</span>
                </Col>
            </Row>
        );
    } 

    // speakers and time of the event
    const SpeakerTime = ({data}) => {
        return (
            <Row>
                <Col sm={12} md={8} className='text-align-left-md text-align-sm'>
                    { data.speakers.map((speaker) => {
                        return(
                            <span style={{ fontSize: '1.3rem', color: 'gray' }}>{speaker} </span>
                        )
                        })
                    }
                </Col>
                <Col sm={12} md={4} className='text-align-right-md text-align-sm'>
                    <span>{data.date}{' '}{data.time}</span>
                </Col>
            </Row>
        );
    }

    // badges indicating type of event
    const Badges = ({data}) => {
        return (
            <React.Fragment>
                {
                    data.badges.map((badge) =>
                    {
                        return(
                                <Col md={3} style={{ marginRight: 5, marginTop: 7 }} >
                                    <Badge pill variant="secondary" style={{ padding: 10, fontSize: '1rem' }}>
                                        {badge}
                                    </Badge>
                                </Col>
                        )
                    })
                }
            </React.Fragment>
        );
    }

    // event card
    const eventCard = data.map((event) => 
      {
          return(
            <Card>
                <div style={{ backgroundColor:'#E8E8E8' }}>
                <div style={{height: 'fitContent'}}>
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
                        <Row>
                            <Badges data={event}/>
                        </Row>
                        </div>
                    </Card.Text>
                </Card.Body>
          </Card>
          )
      })

      return(
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardDeck style={{margin:'10px'}}>
                {eventCard}
            </CardDeck>
          </div>
        );
}

export {
    UpcomingEvents,
    PastEvents
};