import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import ServicePlaces from './service-places';
import config from '@root/google.config';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    const defaultLocation = {
      lat: 22.337118,
      lng: 114.148293
    };

    const currentLocation = defaultLocation;

    const currentLocationMarker = {
      position: currentLocation,
      title: 'This your current location',
      name: 'You'
    };

    const markers = [currentLocationMarker];

    this.state = { currentLocation, currentLocationMarker, markers };
  }

  handleMapReady = (mapProps, map) => {
    const { google } = mapProps;
    const { currentLocation } = this.state;
    const placesService = new ServicePlaces(google, map, currentLocation);

    this.setState({ placesService });
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={this.state.currentLocation}
          onReady={this.handleMapReady}>
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
