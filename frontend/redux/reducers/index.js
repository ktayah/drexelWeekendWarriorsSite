import { combineReducers } from 'redux';
import authenticate from './authenticate';
import tripForm from './tripForm';

const rootReducer = combineReducers({
    authenticate,
    tripForm
});

export default rootReducer;