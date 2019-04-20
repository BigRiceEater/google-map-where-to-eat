export default class ServicePins {
  constructor(currentLocation, onMarkersUpdated) {
    this._places = [];
    this.onMarkersUpdated = onMarkersUpdated;
    this.you = currentLocation;
  }

  updateMarkers() {
    this._markers = [this._you, ...this._places];
    this.onMarkersUpdated(this._markers);
  }

  set you(pos) {
    this._you = {
      position: pos,
      title: 'This your current location',
      name: 'You'
    };
    this.updateMarkers();
  }

  get you() {
    return this._you.position;
  }

  get markers() {
    return this._markers;
  }
}
