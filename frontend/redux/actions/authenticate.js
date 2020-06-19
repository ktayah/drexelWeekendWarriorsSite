import axios from 'axios';
import {
    AUTHENTICATE_STARTED,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_REMEMBER_ME,
    LOGOUT
} from '../types/authenticate'; 
import config from '../../config';

export const logOut = () => dispatch =>
    dispatch({
        type: LOGOUT
    });

export const setRememberMe = expireTime => dispatch => 
    dispatch({
        type: AUTHENTICATE_REMEMBER_ME,
        payload: {
            expireTime
        }
    });

    export const authenticate = (userName, password) => async dispatch => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
    try {
        dispatch(authenticateStarted());
        const res = await axios.post(`${apiUrl}/auth/local`, {
            identifier: userName,
            password: password
        });
        dispatch(authenticateSuccess(res.data));
    } catch (err) {
        console.error('Error', err);
        dispatch(authenticateError(err));
    }
}

const authenticateStarted = () => ({
    type: AUTHENTICATE_STARTED
});

const authenticateSuccess = userData => ({
    type: AUTHENTICATE_SUCCESS,
    payload: {
        ...userData
    }
});

const authenticateError = error => ({
    type: AUTHENTICATE_ERROR,
    payload: {
        error
    }
});