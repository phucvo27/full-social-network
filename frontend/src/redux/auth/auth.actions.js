import { 
    USER_LOGIN_START,
    USER_LOGOUT_SUCCESS, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL, 
    SET_CURRENT_USER, 
    USER_LOGOUT_START, 
} from './auth.types'


export const setCurrentUser = ( payload )=>{
    return {
        type: SET_CURRENT_USER,
        payload
    }
}
export const userLoginStart = ( payload )=>{
    return {
        type: USER_LOGIN_START,
        payload
    }
}

export const userLoginSuccess = ( payload )=>{
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}
export const userLoginFail = ( payload )=>{
    return {
        type: USER_LOGIN_FAIL,
        payload
    }
}
export const userLogOutStart = ()=>{
    return {
        type: USER_LOGOUT_START
    }
}
export const userLogOutSuccess = ()=>{
    return {
        type: USER_LOGOUT_SUCCESS
    }
}
