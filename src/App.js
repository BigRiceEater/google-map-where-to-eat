import React, { Component } from 'react';
import GoogleMap from './components/map/google-map';
import Panel from './components/side-panel/panel';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='columns is-gapless' style={{ height: '100%' }}>
        <div className='column is-three-quarters'>
          <div
            id='map-container'
            style={{ position: 'relative', width: '100%', height: '100%' }}>
            <GoogleMap />
          </div>
        </div>
        <div className='column is-one-quarter'>
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
