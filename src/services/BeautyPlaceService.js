const API_URL = process.env.REACT_APP_API_URL;

export function fetchByCoordinates(lat, lng) {
  let url = `${API_URL}/search?type=hair+skin+nails&coords=${lat}+${lng}`;

  return fetch(url, {accept: 'application/json'})
    .then(res => res.json())
};

export function fetchByCityState(city_state) {
  let url = `${API_URL}/search?type=hair+skin+nails&city_state=${city_state}`;

  return fetch(url, {accept: 'application/json'})
    .then(res => res.json())
};

