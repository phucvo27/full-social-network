import {
    GET_ALL_COMMENT_SUCCESS,
    ADD_COMMENT_TO_POST_SUCCESS,
    EDIT_COMMENT_SUCCESS,
    REMOVE_COMMENT_FROM_POST_SUCCESS
} from './comment.types';

/*
    {
        postID: {
            commentID: {...comment}
        }
    }
*/

export const commentReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ALL_COMMENT_SUCCESS:
            return {
                ...state,
                [action.postID]: action.payload
            }
        case ADD_COMMENT_TO_POST_SUCCESS:
            return {
                ...state,
                [action.postID]: {
                    ...[action.postID],
                    [action.payload._id]: action.payload

                }
            }
        case EDIT_COMMENT_SUCCESS:
            return {
                ...state,
                [action.postID]: {
                    ...[action.postID],
                    [action.payload._id]: action.payload
                }
            }
        case REMOVE_COMMENT_FROM_POST_SUCCESS:
            return {
                ...state,
                [action.postID]: {
                    ...[action.postID],
                    [action.payload._id]: null
                }
            }
        default:
            return state;
    }
}