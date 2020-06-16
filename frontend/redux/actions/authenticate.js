import axios from 'axios';
import {
    AUTHENTICATE_STARTED,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR,
    LOGOUT
} from '../types/authenticate'; 
import config from '../../config';

export const logOut = () => dispatch =>
    dispatch({
        type: LOGOUT
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