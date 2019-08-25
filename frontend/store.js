import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import config from './config';

const middleware = [thunk];
if (config.logActions)
    middleware.push(logger);
    
const initializeStore = (initialState = {}, options) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
    
export default initializeStore;
// The log in call, works here but not linked to an action
// const testCall = async () => {
//     const apiUrl = config.development ? config.apiDevelopment : config.api;
//     return await axios.post(`${apiUrl}/auth/local`, {
//         identifier: 'ktayah@yahoo.com',
//         password: 'QWE#rty6EsT'
//     }).catch(err => {
//         console.error(err);
//     });
// }
// testCall().then(console.log);