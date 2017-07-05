//import people from './people-reducer.js';
import tasks from './tasks-reducer.js' 
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;
