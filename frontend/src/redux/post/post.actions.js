import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    GET_ALL_POST_START,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAIL,
    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    DELETE_POST_START,
    DELETE_POST_SUCCESS
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

// Edit Post
export const editPostStart = (postID, payload) => {
    return {
        type: EDIT_POST_START,
        postID,
        payload
    }
}

export const editPostSuccess = payload => {
    return {
        type: EDIT_POST_SUCCESS,
        uid: payload.owner.uid,
        postID: payload._id,
        payload
    }
}

// Delete post
export const deletePostStart = postID => {
    return {
        type: DELETE_POST_START,
        postID
    }
}

export const deletePostSuccess = payload => {
    return {
        type: DELETE_POST_SUCCESS,
        postID: payload._id,
        uid: payload.owner.uid
    }
}



