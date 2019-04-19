export default class PlacesService {
  constructor(google, map, currentLocation) {
    this.google = google;
    this.service = new google.maps.places.PlacesService(map);
    this._currentLocation = currentLocation;
  }

  set currentLocation(latlongObject) {
    this._currentLocation = latlongObject;
  }

  findByType(...types) {
    const request = {
      location: this._currentLocation,
      radius: '500',
      type: types
    };
    this.service.nearbySearch(request, (result, status) => {
      if (status !== this.google.maps.places.PlacesServiceStatus.OK) {
        console.log("can't find places");
        return;
      }

      result.forEach((place) => console.log(place));

      // result.forEach(function(p) {
      //   addRestaurant(p);
      //   var param = {
      //     title: p.name,
      //     coords: p.geometry.location
      //   };
      //   addMarker(param);
      // });
    });
  }
}
