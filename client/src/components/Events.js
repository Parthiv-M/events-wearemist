import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

const UpcomingEvents = ({data}) => {
    const carouselSlide = data.map((event) => {
        return (
            <Carousel.Item style={{ height:'100vh', width:'96vw', padding:'40px 0', backgroundColor:'#E8E8E8' }}>
                <div style={{ textAlign:'center' }}>
                    <img
                    src={event.src}
                    alt={event.name}
                    height="400px"
                    width="500px"
                    class="center"
                    />
                </div>
                <Carousel.Caption style={{ paddingTop:'50px' }}>
                    <div>
                        <h3 style={{ textAlign:'left' }}>
                            { event.name }
                            <span style={{ display:'inline-block', width:'100px' }}></span> 
                            <i className='fas fa-map-marker-alt' style={{ fontSize:'24px' }}></i>
                            <span style={{ display:'inline-block',width:'10px' }}></span> 
                            <span style={{ fontSize:'20px' }}>{event.platform}</span>
                        </h3>
                    </div>
                    <hr style={{color:'black', backgroundColor:'black', height:'2px'}}/>
                    <h4 style={{textAlign:'left', color:'#808080'}}>
                            { event.speakers.map((speaker) =>
                            {
                                return(
                                    <>{speaker}<span style={{display:'inline-block',width:"20px"}}></span></>
                                )
                            })}
                            <span style={{fontSize:'20px',  float:'right'}}>{event.date}{' '}{event.time}</span>
                    </h4>
                    <br/>
                    <div style={{textAlign:'left'}}>
                        {
                            event.badges.map((badge) =>
                            {
                                return(
                                    <span style={{fontSize:'30px'}}>
                                        <Badge pill variant="primary" style={{ backgroundColor:'#808080'}}>{badge}</Badge>{ "   "}
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