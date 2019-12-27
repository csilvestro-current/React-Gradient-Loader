import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CircleProgress} from 'react-gradient-progress'

function App() {
  return (
    <div className="App">
      {/* percentage is a required property. All others are optional. */}
      <CircleProgress percentage={70} strokeWidth={8} secondaryColor="#f0f0f0" />

      <p>Docs <a href='https://medium.com/better-programming/build-beautiful-gradient-enabled-circular-progress-bars-in-react-d0a746deed0'>Docs</a></p>
    </div>
  );
}

export default App;
