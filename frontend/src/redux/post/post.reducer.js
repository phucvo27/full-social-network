import {
    POST_CREATE_SUCCESS,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAIL
} from './post.types'

const INIT_STATE = {}

export const postReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.uid]: [ action.payload ,...state.posts[action.uid]]
                }
            }
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                [action.uid]:action.payload
            }
        case GET_ALL_POST_FAIL:
            return {
                ...state,
                posts: []
            }
        default:
            return state;
    }
}
/*
action.payload
*/