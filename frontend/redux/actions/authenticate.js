import axios from 'axios';
import config from '../../config';

export const logOut = () => dispatch =>
    dispatch({
        type: 'LOGOUT'
    });

export const authenticate = (userName, password) => dispatch => {
    const apiUrl = config.development ? config.apiDevelopment : config.api;
    dispatch(authenticateStarted());
    axios.post(`${apiUrl}/auth/local`, {
        identifier: userName,
        password: password
    }).then(res => {
        console.log('Success', res.data);
        dispatch(authenticateSuccess(res.data));
    }).catch(err => {
        console.log('Error', err);
        dispatch(authenticateError(err));
    });
}

const authenticateStarted = () => {
    return {
        type: "AUTHENTICATE_STARTED"
    }
};

const authenticateSuccess = (userData) => {
    return {
        type: "AUTHENTICATE_SUCCESS",
        payload: {
            ...userData
        }
    }
};

const authenticateError = (error) => {
    return {
        type: "AUTHENTICATE_ERROR",
        payload: {
            error
        }
    }
};