const authenticate = (state = {}, action) => {
    console.log(action);
    switch(action.type) {
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
                userData: action.payload
            };
        case 'AUTHENTICATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loading: false,
                userData: null
            }
        default:
            return state;
    }
}

export default authenticate;