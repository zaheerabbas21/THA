import { LOGIN_SUCCESS, LOGOUT, SET_LOADING } from "../types";   

const authReducer = (state, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loading: false
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loading: false
            };
        default:
            return state;
    }
}

export default authReducer;