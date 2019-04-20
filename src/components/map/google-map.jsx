import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import ServicePlaces from './service-places';
import ServiceLocation from './service-location';
import config from '@root/google.config';

class GoogleMap extends Component {
  state = {
    currentLocation: {}
  };

  constructor(props) {
    super(props);
    const location = new ServiceLocation();
    const currentLocation = location.get();

    const currentLocationMarker = {
      position: currentLocation,
      title: 'This your current location',
      name: 'You'
    };

    const markers = [currentLocationMarker];

    this.state = {
      services: { location },
      currentLocation,
      currentLocationMarker,
      markers
    };
  }

  handleMapReady = (mapProps, map) => {
    const { google } = mapProps;
    const { location } = this.state.services;
    const { currentLocation } = this.state;
    const places = new ServicePlaces(google, map, currentLocation);
    this.setState({ services: { location, places } });
  };

  handleDragend = () => {
    console.log('the map was dragged');
    // handle center of map changed here?
  };

  handleMapClick = () => {
    console.log('Only fired if no marker or infowindow was clicked');
    // can use this to handle choosing your location.
  };

  render() {
    const { currentLocation, markers } = this.state;
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={currentLocation}
          onReady={this.handleMapReady}
          onDragend={this.handleDragend}
          onClick={this.handleMapClick}>
          {markers.map((marker) => (
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
