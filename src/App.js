import React from 'react';
import logo from './logo.svg';
import './App.css';

import RTCMesh from 'react-rtc-real';
require('react-rtc-real/assets/index.css');

function App() {
  return (
    <div className="App">
      <RTCMesh URL="wss://877bd7b0.ngrok.io" />
    </div>
  );
}

export default App;
