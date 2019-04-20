import ServiceLocation from './service-location';

export default class ServicePins {
  constructor(map, onMarkersUpdated) {
    this._map = map;
    this._location = new ServiceLocation(map);
    this._places = [];
    this.onMarkersUpdated = onMarkersUpdated;

    this.refresh();
  }

  updateMarkers() {
    this._markers = [this._you, ...this._places];
    this.onMarkersUpdated(this._markers);
  }

  refresh() {
    this._location.get().then((pos) => {
      this._map.setCenter(pos);
      this.you = pos;
    });
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
