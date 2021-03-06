import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import config from '../config';

let store;

const persistConfig = {
    key: 'drexelww',
    whitelist: ['authenticate'],
    storage,
    transforms: [
        expireReducer('authenticate', {
            persistedAtKey: 'expireTime',
            expireSeconds: 3600 // By default set to expire in one hour
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore(initialState = {}) {
    const middleware = [thunk];
    if (config.logActions)
        middleware.push(logger);

    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}

export const initializeStore = preloadedState => {
    let _store = store ?? makeStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}