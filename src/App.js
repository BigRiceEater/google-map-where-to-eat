import React, { Component } from 'react';
import GoogleMap from './components/map/google-map';
import Panel from './components/side-panel/panel';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='columns is-gapless' style={{ height: '100%' }}>
        <div className='column is-three-quarters is-tablet'>
          <div id='map-container'>
            <GoogleMap />
          </div>
        </div>
        <div className='column is-one-quarter is-tablet'>
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
