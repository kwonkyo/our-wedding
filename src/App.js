import React from 'react';
import './App.css';
import { Home } from './Home.js';
import { RSVP } from './RSVP.js';
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
          <Link className="RSVPLink" to="/rsvp">
            <div className="RSVPButton">
              <span>RSVP</span>
            </div>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/rsvp' component={RSVP}/>
        </Switch>
      </Router>
      <div className="Footer">
        This website is designed by © Hee Hyun and Victor.
      </div>
    </div>
  );
}

export default App;
