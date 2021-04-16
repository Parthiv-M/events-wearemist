import React, { useState, useEffect } from 'react';
import './App.css';

const RenderEvents = ({data}) => {
  return (
    <div>
        {
        data.map((event, index) => (
          <ul>
            <li key={index}>
              {event.text}
            </li>
          </ul>
        ))
        }
    </div>
  );
}

function App() {
  
  const getData = async () => {
    const eventsData = await fetch('https://raw.githubusercontent.com/Parthiv-M/events-wearemist/parthiv/data/events.json');
    const parsedEvents = await eventsData.json();    
    setEventsData(parsedEvents);
  }

  const [data, setEventsData] = useState([]);

  useEffect(() => {  
      getData();
  }, []);

  return (
    <div className="App">
      <h3>Hello</h3>
      <RenderEvents data={data}/>
    </div>
  );
}

export default App;
