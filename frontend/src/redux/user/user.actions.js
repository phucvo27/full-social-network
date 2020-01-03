import {
    GET_BASIC_USER_INFOR_SUCCESS,
    GET_BASIC_USER_INFOR_START,
    GET_POST_OF_USER_START,
    GET_POST_OF_USER_SUCCESS
} from './user.types'

export const getBasicUserInforStart = uid => {
    return {
        type: GET_BASIC_USER_INFOR_START,
        uid
    }
}

export const getBasicUserInforSuccess = (uid, payload) =>{
    return {
        type: GET_BASIC_USER_INFOR_SUCCESS,
        uid,
        payload
    }
}

export const getPostOfUserStart = uid => {
    return {
        type: GET_POST_OF_USER_START,
        uid
    }
}

export const getPostOfUserSuccess = (uid, payload)=>{
    return {
        type: GET_POST_OF_USER_SUCCESS,
        uid,
        payload
    }
}