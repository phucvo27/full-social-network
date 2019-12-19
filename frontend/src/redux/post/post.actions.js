import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL
} from './post.types';

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