import axios from 'axios';

const WEATHER_API = 'f10d979ce2c11a685ff411a08cae9ce5';
const ROOT_URL = `https://api.darksky.net/forecast/${WEATHER_API}/`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(coordinates) {
  const url = `${ROOT_URL}${coordinates.lat},${coordinates.lng}?exclude=currently,minutely,hourly,flags`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
