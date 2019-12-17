import {
    SET_CURRENT_USER,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LOGOUT_FAIL
 } from './user.types';

const INIT_STATE = {
    currentUser: null,
    error: null
}

export const userReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case USER_LOGIN_FAIL:
        case USER_LOGOUT: 
            return {
                ...state,
                error: action.payload.error
            }
        case USER_LOGOUT_FAIL:
        default:
            return state;
    }
}