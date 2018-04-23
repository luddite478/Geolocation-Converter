import React, { Component } from 'react';
import CoordInput from './CoordInput.js';
import AddressInput from './AddressInput.js';
import ConvertButton from './ConvertButton.js';
import { Switch, Route } from 'react-router';
import '../css/MainPage.css';

const MainPage = () => {
  return (
      <div className="MainPage">
        <h1> Geolocation Converter</h1>
        <ConvertButton />
        <div className="Inputs">
          <CoordInput />
          <AddressInput />
        </div>
      </div>
    );
  }

export default MainPage;
