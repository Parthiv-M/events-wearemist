import React, { useState, useEffect } from 'react';
import './App.css';
import { PastEvents, UpcomingEvents } from './components/Events';
import InfoText from './components/InfoText';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Navbar from './components/NavBar';

function App() {
  
  // function to get data from json file
  const getData = async () => {
    const eventsData = await fetch('https://raw.githubusercontent.com/Parthiv-M/events-wearemist/main/data/events.json');
    const parsedEvents = await eventsData.json();    
    setEventsData(parsedEvents);
  }

  const [data, setEventsData] = useState([]);

  useEffect(() => {  
      getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <InfoText />
      <UpcomingEvents data={data} />
      <Row className='padding-md padding-sm'>
            <Col md={12} style={{ fontSize: '1.5rem', textAlign: 'left' }}>
            <div className='title-md'>
                PAST EVENTS
                <div style={{ flexGrow: 1, borderBottom: '3px solid #3c3c3c' }}></div>
            </div>
            </Col>
        </Row>
      <PastEvents data={data} />
    </div>
  );
}

export default App;
