import {
    AUTHENTICATE_STARTED,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_REMEMBER_ME,
    LOGOUT
} from '../types/authenticate';

const initialState = {
    loading: false,
    error: null,
    jwt: null,
    user: null,
    expireTime: 0
}

const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_STARTED:
            return {
                ...state,
                loading: true
            };
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                jwt: action.payload.jwt,
                user: action.payload.user
            };
        case AUTHENTICATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case AUTHENTICATE_REMEMBER_ME:
            return {
                ...state,
                expireTime: action.payload.expireTime
            }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authenticate;