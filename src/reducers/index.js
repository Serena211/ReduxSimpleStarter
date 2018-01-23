import { combineReducers } from 'redux';
import FetchWeatherReducer from './recuder_fetch_weather';

const rootReducer = combineReducers({
  weather: FetchWeatherReducer
});

export default rootReducer;
