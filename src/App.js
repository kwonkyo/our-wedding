import React from 'react';
import './App.css';
import { Home } from './Home.js';
import { RSVP } from './RSVP.js';
import { Details } from './Details.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="Header">
          <Link to="/">
            <img className="Monogram" src="android-chrome-512x512.png"/>
          </Link>
          <div className="Nav">
            <Link to="/details">
              <div className="NavButton">
                <span>Details</span>
              </div>
            </Link>
            <Link to="/rsvp">
              <div className="NavButton RSVPButton">
                <span>RSVP</span>
              </div>
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/rsvp' component={RSVP}/>
          <Route exact path='/details' component={Details}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
