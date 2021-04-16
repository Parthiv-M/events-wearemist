import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import EventsCards from './Components/card';

import EventsCarousel from './Components/carousel';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>hi</h2>
      <EventsCarousel/>
      <br/>
      <h1>Past Events</h1>
      <br/>
      <br/>
      <EventsCards/>
    </div>
  );
}

export default App;
