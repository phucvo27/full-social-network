import {
    POST_CREATE_SUCCESS,
    GET_ALL_POST_SUCCESS,
    EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from './post.types'

const INIT_STATE = {}

export const postReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                [action.uid]: [ action.payload ,...state.posts[action.uid]]
            }
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                [action.uid]:action.payload
            }
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                [action.uid]: state[action.uid].map(post => post._id === action.postID ? action.payload : post)
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                [action.uid]: state[action.uid].filter(post => post._id !== action.postID)
            }
        
        default:
            return state;
    }
}
/*
action.payload
*/