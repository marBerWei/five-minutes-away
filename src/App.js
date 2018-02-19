import React, { Component } from 'react';
import GoogleMaps from './components/PlacesForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMaps/>
      </div>
    );
  }
}

export default App;
