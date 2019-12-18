import React from 'react';
import './App.css';
import { Home } from './Home.js';
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
        <div className="Monogram">
          <Link to="/">
            <img src="android-chrome-512x512.png"/>
          </Link>
        </div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
