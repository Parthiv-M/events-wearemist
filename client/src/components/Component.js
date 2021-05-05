import React, { useEffect, useState } from 'react';
import InfoText from './InfoText';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Navbar from './NavBar';
import Footer from './Footer';
import { PastEvents, UpcomingEvents } from './Events';
import './../App.css';
import Loader from 'react-loader-spinner';

const Component = () => {
    
    // function to get data from json file
    const getData = async () => {
      // fetch events data
      const eventsData = await fetch('https://raw.githubusercontent.com/Parthiv-M/events-wearemist/main/data/events.json');
      const parsedEvents = await eventsData.json();    
      // function to get upcoming events
      let upcoming = parsedEvents.filter((event) => {
        return new Date(event.filterDate.split('-')[0], event.filterDate.split('-')[1]-1, event.filterDate.split('-')[2]) > Date.now()
      });
      setUpcomingData(upcoming);
      // function to get past events
      let past = parsedEvents.filter((event) => {
        return new Date(event.filterDate.split('-')[0], event.filterDate.split('-')[1]-1, event.filterDate.split('-')[2]) < Date.now()
      });
      setPastData(past);
      // fetch team data
      const teamData = await fetch('https://raw.githubusercontent.com/Parthiv-M/events-wearemist/main/data/team/team.json')
      const parsedTeam = await teamData.json();
      setTeamData(parsedTeam);

      setLoading(false);
    }
  
    const [upcomingData, setUpcomingData] = useState([]);
    const [pastData, setPastData] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {  
        getData();
    }, []);

    return(
      loading ? 
        <div className='text-center' style={{ height: '100vh', width: '100vw', overflow: 'hidden', lineHeight: '100vh ' }}>
         <Loader
          type='Bars'
          height={100}
          width={100}
          color='#1b1b1b'
         ></Loader>
        </div> 
        :
        <>
            <Navbar />
            <InfoText />
            <UpcomingEvents data={upcomingData} />
            <Row className='padding-md padding-sm'>
                  <Col md={12} style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                  <div className='title-md title-sm'>
                      PAST EVENTS
                      <div style={{ flexGrow: 1, borderBottom: '4px solid #3c3c3c' }}></div>
                  </div>
                  </Col>
              </Row>
            <PastEvents data={pastData} />
            <Footer data={teamData}/>
        </>
    );
}

export default Component;