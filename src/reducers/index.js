import { combineReducers } from 'redux';
import commentsReducer from './comments';
//a reducer to collect all of those comments as they're created
//the comment reducer will be responsible for creating the Common pieces of application state as well 
const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
