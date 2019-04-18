import React, { Component } from 'react';
import GoogleMap from './components/map/google-map';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Where to Eat?</h1>
        <GoogleMap />
      </div>
    );
  }
}

export default App;
