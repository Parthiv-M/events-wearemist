import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Component} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
