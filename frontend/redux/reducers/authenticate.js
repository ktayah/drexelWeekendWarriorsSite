const initialState = {
    loading: false,
    error: null,
    jwt: null,
    user: null
}

const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'AUTHENTICATE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                jwt: action.payload.jwt,
                user: action.payload.user
            };
        case 'AUTHENTICATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export default authenticate;