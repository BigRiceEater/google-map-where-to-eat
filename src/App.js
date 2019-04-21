import React, { Component } from 'react';
import GoogleMap from './components/map/google-map';
import Panel from './components/side-panel/panel';
import { relative } from 'path';

class App extends Component {
  state = {};
  render() {
    return (
      <div
        id='app-container'
        style={{ position: 'relative', width: '200px', height: '200px' }}>
        <GoogleMap />
      </div>
    );
  }
}

export default App;
