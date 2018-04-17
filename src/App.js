import React, { Component } from 'react';
import CoordInput from './components/CoordInput.js';
import AddressInput from './components/AddressInput.js';
import ConvertButton from './components/ConvertButton.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Geolocation Converter</h1>
        <ConvertButton />
        <div className="Inputs">
          <CoordInput />
          <AddressInput />
        </div>
      </div>
    );
  }
}

export default App;
