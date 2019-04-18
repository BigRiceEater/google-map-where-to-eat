import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import config from '@root/google.config';

class GoogleMap extends Component {
  state = {
    markers: []
  };

  componentWillMount() {
    const defaultLocation = {
      lat: 22.337118,
      lng: 114.148293
    };

    const currentLocationMarker = {
      position: { ...defaultLocation },
      title: 'This your current location',
      name: 'You'
    };

    const markers = [currentLocationMarker];

    this.setState({ defaultLocation, currentLocationMarker, markers });
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={this.state.defaultLocation}>
          {this.state.markers.map((marker) => (
            <Marker
              key={marker.name}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: config.apiKey })(GoogleMap);
