import React, { useState, useEffect } from 'react';
import './App.css';
import EventsCarousel from './components/Events';

function App() {
  
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
      {/* <h3>Hello</h3> */}
      <EventsCarousel data={data}/>
    </div>
  );
}

export default App;
