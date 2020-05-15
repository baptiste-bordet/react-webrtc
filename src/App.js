import React from 'react';
import './App.css';

import RTCMesh from './RTCMesh';

function App() {
  return (
    <div className="App">
      <RTCMesh URL="wss://61a994e0.ngrok.io" mediaConstraints={{ video: true, audio: true }}/>
    </div>
  );
}

export default App;
