import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import ServicePlaces from './service-places';
import ServiceLocation from './service-location';
import ServicePins from './service-pins';
import config from '@root/google.config';

class GoogleMap extends Component {
  state = {
    services: {},
    markers: []
  };

  createServices = (google, map) => {
    const location = new ServiceLocation();
    const pins = new ServicePins((markers) => this.setState({ markers }));
    const places = new ServicePlaces(google, map);
    this.setState({ services: { location, pins, places } });
  };

  handleMapReady = (mapProps, map) => {
    const { google } = mapProps;
    this.createServices(google, map);
    this.state.services.location.get().then((pos) => {
      map.setCenter(pos);
      this.state.services.pins.you = pos;
    });
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.apiKey
})(GoogleMap);
