import React, { useState, useEffect } from 'react';
import './App.css';
import { PastEvents, UpcomingEvents } from './components/Events';
import InfoText from './components/InfoText';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  
  // function to get data from json file
  const getData = async () => {
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
  }

  const [upcomingData, setUpcomingData] = useState([]);
  const [pastData, setPastData] = useState([]);

  useEffect(() => {  
      getData();
  }, []);

  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
