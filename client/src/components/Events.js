import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import FeatherIcon from 'feather-icons-react';

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

export default UpcomingEvents;