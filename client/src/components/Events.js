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
            <Carousel.Item style={{ height:'90vh', width:'90vw', padding:'40px 0', backgroundColor:'#E8E8E8' }}>
                <img
                    src={event.src}
                    alt={event.name}
                    width="500px"
                    class="center"
                />
                <Carousel.Caption style={{ paddingTop:'50px' }}>
                    <div style={{ display: 'flex', flexFlow: 'row wrap', alignContent: 'space-between' }}>
                        <h3 style={{ textAlign:'left', fontWeight: "bold", fontSize: '3rem' }}>
                            { event.name }
                            <span style={{ display:'inline-block', width:'100px' }}></span> 
                        </h3>
                        <div style={{ flexGrow: 1 }}></div>
                        <span style={{ fontSize:'2rem' }}><FeatherIcon icon='map-pin' size='35px' style={{ margin:'10px' }}/>
                            {event.platform}
                        </span>
                    </div>
                    <hr style={{ color:'black', backgroundColor:'black', height:'2px' }}/>
                    <Row>
                        <Col sm={12} md={8} style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '2rem', color: '#3c3c3c' }}>
                            { event.speakers.map((speaker) =>
                                {
                                    return(
                                        <>
                                            <span>
                                            {speaker}
                                            </span>
                                        </>
                                    )
                            })}
                        </Col>
                        <Col sm={12} md={4} style={{ fontSize:'20px', textAlign: 'right' }}>
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
                    <FeatherIcon icon='map-pin' style={{ marginRight: 7 }}/>
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