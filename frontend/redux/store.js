import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import config from '../config';

const middleware = [thunk];
if (config.logActions)
    middleware.push(logger);
    
const makeStore = (initialState) => {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}
 
export default makeStore;