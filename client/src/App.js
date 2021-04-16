import './App.css';

const getEventsData = async() => {
  const eventsData = await fetch('https://raw.githubusercontent.com/Parthiv-M/events-wearemist/parthiv/data/events.json');
  const parsedEvents = await eventsData.json();
  console.log(parsedEvents);
  return parsedEvents;
}

const renderEvents = () => {
  const data = getEventsData();
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h3>Hello</h3>
      {renderEvents}
    </div>
  );
}

export default App;
