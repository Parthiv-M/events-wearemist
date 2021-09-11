import "./styles/global.css"
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import EventsPage from './pages/eventsPage';
import Creators from "./pages/creators";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/events/:type/:page' component={EventsPage} />
          <Route exact path='/creators' component={Creators} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
