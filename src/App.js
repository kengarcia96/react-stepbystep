import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => { alert("now you know how to handle onclick event") }}>
        Hello World!
        </button>
        <p>number: 0</p>
      </header>
    </div>
  );
}

export default App;
