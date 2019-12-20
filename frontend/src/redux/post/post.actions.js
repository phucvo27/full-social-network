import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    GET_ALL_POST_START,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAIL
} from './post.types';

export const getAllPost = (uid) => {
    return {
        type: GET_ALL_POST_START,
        uid
    }
}

export const getAllPostSuccess = (uid, payload)=>{
    return {
        type: GET_ALL_POST_SUCCESS,
        uid,
        payload
    }
}

export const getAllPostFail = ()=>{
    return {
        type: GET_ALL_POST_FAIL
    }
}


export const postCreateStart = ( payload )=>{
    return {
        type: POST_CREATE_START,
        payload
    }
}

export const postCreateSuccess = (payload)=>{
    return {
        type: POST_CREATE_SUCCESS,
        payload
    }
}

export const postCreateFail = ()=>{
    return {
        type: POST_CREATE_FAIL
    }
}