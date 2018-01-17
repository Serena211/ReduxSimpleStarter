import { combineReducers } from 'redux';
//a reducer to collect all of those comments as they're created
//the comment reducer will be responsible for creating the Common pieces of application state as well 
const rootReducer = combineReducers({
  comments: (state = []) => state
});

export default rootReducer;
