import axios from 'axios';

const API_KEY = '99d3e0ec5d3fa65ae22fd9aae3de7789';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//this is an action file, so first comes up with action structure;
const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;     //us as default country code
    const request = axios.get(url);    //return promise (not data)
    // console.log('Request: ' + request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
};