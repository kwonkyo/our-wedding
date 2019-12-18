import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home.js';

function App() {
  return (
    <div className="App">
      <div className="Monogram">
        <img src="android-chrome-512x512.png"/>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
