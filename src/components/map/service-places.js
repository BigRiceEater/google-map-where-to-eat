export default class ServicePlaces {
  constructor(google, map) {
    this.google = google;
    this.service = new google.maps.places.PlacesService(map);
  }

  nearbySearch({ location, radius, type }) {
    const request = {
      location,
      radius,
      type
    };
    return new Promise((resolve, reject) => {
      this.service.nearbySearch(request, (result, status) => {
        if (status !== this.google.maps.places.PlacesServiceStatus.OK) {
          reject();
        }
        resolve(result);

        // result.forEach((place) => console.log(place));

        // result.forEach(function(p) {
        //   addRestaurant(p);
        //   var param = {
        //     title: p.name,
        //     coords: p.geometry.location
        //   };
        //   addMarker(param);
        // });
      });
    });
  }
}
