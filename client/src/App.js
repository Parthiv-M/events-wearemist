import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import EventsPage from './pages/eventsPage';
import CreditsPage from './pages/creditsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/events' component={EventsPage} />
          <Route exact path='/credits' component={CreditsPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
