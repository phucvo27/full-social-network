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
                [action.uid]: {
                    ...state[action.uid], 
                    [action.payload._id]: action.payload
                }
            }
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                [action.uid]:action.payload
            }
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    [action.postID]: action.payload
                }
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    [action.postID]: null
                }
            }
        
        default:
            return state;
    }
}
/*
action.payload
*/