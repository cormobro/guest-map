

export function getLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, () => {      
      resolve(fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I')
        .then(res => res.json())
        .then(location => {
          return {
            lat: location.latitude,
            lng: location.longitude
          };
        }));
    });
  });
}
