import {combineReducers} from 'redux';
import courses from './courseReducer';
//since i have exported default i can alias it with any name 

const rootReducer = combineReducers({
    courses

});

export default rootReducer;