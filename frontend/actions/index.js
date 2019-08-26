import axios from 'axios';
import config from '../config';

const logOut = () => {
    // Add Log out code
    return {
        type: 'LOGOUT'
    }
}
/**
 * Action to log in user
 * @param {String} userName The user's userName
 * @param {String} password The user's password
 */
export const authenticatePOC = (userName, password) => {
    return {
        type: "HIT_POC_AUTH",
        userName,
        password
    };
}

const authenticate = (userName, password) => dispatch => {
    dispatch(authenticateStarted());
    const apiUrl = config.development ? config.apiDevelopment : config.api;
    axios.post(`${apiUrl}/auth/local`, {
        identifier: userName,
        password: password
    }).then(res => {
        console.log('res', res);
        dispatch(authenticateSuccess(res.data));
    }).catch(err => {
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

export default { authenticate, logOut };