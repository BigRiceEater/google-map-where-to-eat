export default class ServiceLocation {
  constructor() {}

  get default() {
    return { lat: 22.337118, lng: 114.148293 };
  }

  get() {
    return new Promise((resolve, reject) => {
      const geo = navigator.geolocation;
      if (geo) {
        geo.getCurrentPosition(
          (pos) => {
            resolve({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            });
          },
          (err) => {
            console.log(err);
            resolve(this.default);
          }
        );
      }
    });
  }
}
