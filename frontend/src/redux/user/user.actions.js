import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, SET_CURRENT_USER } from './user.types'


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
export const userLogOut = ()=>{
    return {
        type: USER_LOGOUT
    }
}